import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';

import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  const router = inject(Router);

  // Check if user has been created. if yes return true. Otherwise, send app to login page.

  if (userService.user()) { // if it exists
    return true;
  }

  return router.navigate(['login']);  // go back to login
};
