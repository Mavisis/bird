// auth/auth.guard.ts
import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
class _GuardDeps {
  auth = inject(AuthService);
  router = inject(Router);
}

export const AuthGuard: CanActivateFn = async () => {
  const deps = inject(_GuardDeps);

  // Ensure we have a fresh session (handles SSR or first load)
  await firstValueFrom(deps.auth.refreshSession());

  if (deps.auth.isAuthenticated) return true;

  deps.router.navigateByUrl('/');
  return false;
};
