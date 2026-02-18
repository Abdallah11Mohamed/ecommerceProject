import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { storeKeys } from '../constants/storeKeys';

export const gustGuard: CanActivateFn = (route, state) => {
  const router =inject(Router)
  const pLATFORM_ID = inject(PLATFORM_ID)
if (isPlatformBrowser(PLATFORM_ID)) {
   if (localStorage.getItem(storeKeys.userToken)) {
 return router.parseUrl("/main/home")
 }
  
 
}
return true
};

