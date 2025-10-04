// auth/auth.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, of, tap, catchError } from 'rxjs';

export type Session =
  | { isAuthenticated: false }
  | { isAuthenticated: true; user: { email: string; name?: string; role: 'admin'|'editor'|'viewer' } };

@Injectable({ providedIn: 'root' })
export class AuthService {
  private http = inject(HttpClient);
  private session$ = new BehaviorSubject<Session>({ isAuthenticated: false });
  // expose as readonly
  readonly sessionState$ = this.session$.asObservable();

  /** Call on app start or before guard decisions */
  refreshSession() {
    return this.http.get<Session>('/api/session', { withCredentials: true }).pipe(
      tap(s => this.session$.next(s)),
      catchError(() => {
        this.session$.next({ isAuthenticated: false });
        return of({ isAuthenticated: false } as Session);
      })
    );
  }

  /** Convenience sync getters */
  get isAuthenticated() {
    return this.session$.value.isAuthenticated === true;
  }

  get role(): 'admin'|'editor'|'viewer'|undefined {
    return this.session$.value.isAuthenticated ? this.session$.value.user.role : undefined;
  }

  /** Starts server-side login (OIDC code+PKCE). Server will redirect to provider. */
  login(redirectTo: string = '/playground') {
    // server should remember return URL in state or cookie
    return this.http.post('/api/auth/login', { redirectTo }, { withCredentials: true }).subscribe();
  }

  logout() {
    return this.http.post('/api/auth/logout', {}, { withCredentials: true }).subscribe(() => {
      this.session$.next({ isAuthenticated: false });
      // hard reload to clear any app state
      location.assign('/');
    });
  }
}
