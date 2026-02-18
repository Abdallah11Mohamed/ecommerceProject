

import { CanActivateFn, Router } from '@angular/router';
import { storeKeys } from '../constants/storeKeys';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const router =inject(Router)
  const pLATFORM_ID = inject(PLATFORM_ID)
if (isPlatformBrowser(pLATFORM_ID)) {
   if (localStorage.getItem(storeKeys.userToken)) {
  return true;
 }
  
 
}
return router.parseUrl("/auth/login")
};
