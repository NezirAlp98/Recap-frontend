import { Pipe, PipeTransform } from '@angular/core';
import { CarDetail } from '../models/carDetail';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(value: CarDetail[],carFilterText:string): CarDetail[] {
    carFilterText=carFilterText?carFilterText.toLocaleLowerCase():"";
    return carFilterText?value.filter((c:CarDetail)=>c.description.toLocaleLowerCase().indexOf(carFilterText)!==-1):value;
  }

}
