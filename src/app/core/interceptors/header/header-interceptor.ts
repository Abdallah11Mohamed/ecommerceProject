
import { HttpInterceptorFn } from '@angular/common/http';
import { storeKeys } from '../../constants/storeKeys';
import { inject, PLATFORM_ID } from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

export const headerInterceptor: HttpInterceptorFn = (req, next) => {


  const platid = inject(PLATFORM_ID)
if (isPlatformBrowser(platid)) {
  const token =localStorage.getItem(storeKeys.userToken)
if (token) {
  req=req.clone({
    setHeaders:{
   token: token
    }
  })
}

}








  return next(req);
};



