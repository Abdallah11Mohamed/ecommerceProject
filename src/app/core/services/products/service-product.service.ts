import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IproductResponse } from '../../models/products/iproduct.interface';
import { environment } from '../../../../environments/environment.development';


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly httpClient=inject(HttpClient);

  getproducts(page: number = 1, limit: number = 40): Observable<IproductResponse> {
    return this.httpClient.get<IproductResponse>(
      environment.base_url + `products?page=${page}&limit=${limit}`
    );
  }

}
