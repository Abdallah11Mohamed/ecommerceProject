import { HttpClient,  } from '@angular/common/http';
import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { Categores, CategoresResponse } from '../../models/categories/categores.interface';

@Injectable({
  providedIn: 'root',
})
export class CategorisService {
  private readonly httpClient =inject(HttpClient)




  getcatigores():Observable<CategoresResponse>{
return this.httpClient.get<CategoresResponse>(environment.base_url +"categories")
  }
}
