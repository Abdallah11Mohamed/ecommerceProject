import { Pipe, PipeTransform } from '@angular/core';
import { Iproduct } from '../../core/models/products/iproduct.interface';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(productList:Iproduct[],word:string): Iproduct[] {
    return productList.filter(item=>item.title.toLowerCase().includes(word.toLocaleLowerCase()));
  }

}
