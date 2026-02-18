import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ProductDetailsService {
   private readonly httpClient=inject(HttpClient);
productDetails(id:string|null):Observable<any>{
 return this.httpClient.get<any>(environment.base_url +`products/${id}`);
}
}
