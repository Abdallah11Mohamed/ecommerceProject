import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';
import { IuserDataResponse } from '../../models/user/iuser-data.interface';
import { jwtDecode } from 'jwt-decode';
import { storeKeys } from '../../../constants/storeKeys';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    private readonly httpClient=inject(HttpClient);
     private readonly router=inject(Router);
    
 userDatadecode:any=null;
sendRegisterData(userData:object):Observable<IuserDataResponse>{
 return this.httpClient.post<IuserDataResponse> (environment.base_url +"auth/signup",userData);

}
sendloginData(userData:object):Observable<any>{
 return this.httpClient.post (environment.base_url +"auth/signin",userData);
 

}

decodeToken():void{
if (localStorage.getItem(storeKeys.userToken)) {
    const token = localStorage.getItem(storeKeys.userToken)!;

  if (!token) return;

   this.userDatadecode = jwtDecode(token);
  console.log(this.userDatadecode);
}

}

userLogout():void{
  localStorage.removeItem(storeKeys.userToken)
   this.userDatadecode = null;

this.router.navigate(["/auth/login"])
}



}
