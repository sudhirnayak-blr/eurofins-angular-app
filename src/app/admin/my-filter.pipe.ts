import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

//ng g pipe admin/my-filter --skip-tests --flat 

@Pipe({
  name: 'myFilter'
})
export class MyFilterPipe implements PipeTransform {

  transform(items: Product[], filter: string): any {
     if(!items || !filter || filter=="") return items; 

     return items.filter(item=>item.productName.toLowerCase().match(filter.toLowerCase()));
  }
}
