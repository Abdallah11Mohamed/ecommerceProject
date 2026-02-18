import { HttpClient, httpResource } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { storeKeys } from '../../../core/constants/storeKeys';
import { CartDataResponse } from '../models/cart-data.interface';
import { CartDEtilsResponse } from '../models/cart-detils.interface';
import { PaymentDetilsResponse } from '../models/payment-detils.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly httpClient = inject(HttpClient)

  Addproducttocart(id:string):Observable<CartDataResponse>{
return this.httpClient.post<CartDataResponse>(environment.base_url +"cart",
  {
    productId: id,
},


)
  };



  getLocedusercart():Observable<CartDEtilsResponse>{
return this.httpClient.get<CartDEtilsResponse>(environment.base_url +'cart' , 
  
)
  }
 removeDetailsData(id: string , count:number): Observable<CartDEtilsResponse> {
  return this.httpClient.delete<CartDEtilsResponse>(
    environment.base_url + `cart/${id}`,
    
    
  );
}
UpdataProductcart(id: string, count: number): Observable<CartDEtilsResponse> {
  return this.httpClient.put<CartDEtilsResponse>(
    environment.base_url + `cart/${id}`,
    {
      count: count,
    },
    
    
  );
}
chekOutsessaion(cartId:string|null, checkOutdata:object):Observable<PaymentDetilsResponse>{
  return this.httpClient.post<PaymentDetilsResponse>( environment.base_url +`orders/checkout-session/${cartId}?url=http://localhost:4200` ,
checkOutdata,


  )
}

}
 