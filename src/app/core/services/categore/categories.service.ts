import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { IcategoriesResponse } from '../../models/categories/icategories.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
   private readonly httpClient=inject(HttpClient);

getCategories():Observable<IcategoriesResponse>{
 return this.httpClient.get<IcategoriesResponse>(environment.base_url +"categories");
}

}
