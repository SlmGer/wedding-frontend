import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../core/services/auth';

export const guestGuard: CanActivateFn = (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isFamily()) {
    return true;
  }

  if (auth.isGuest()) {
    return true;
  }

  router.navigate(['login']);
  return false;
};
