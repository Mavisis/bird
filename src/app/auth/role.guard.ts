// auth/role.guard.ts
import { CanActivateFn, ActivatedRouteSnapshot, Router } from '@angular/router';
import { inject, Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
class _RoleDeps {
  auth = inject(AuthService);
  router = inject(Router);
}

export const RoleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const deps = inject(_RoleDeps);
  const allowed: string[] = route.data['roles'] ?? [];
  const role = deps.auth.role;

  if (!role) {
    deps.router.navigateByUrl('/');
    return false;
  }
  if (allowed.length === 0 || allowed.includes(role)) return true;

  // user is logged in but not allowed
  deps.router.navigateByUrl('/'); // or /forbidden if you have a page
  return false;
};
