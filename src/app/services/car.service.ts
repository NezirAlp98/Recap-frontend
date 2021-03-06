import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44316/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let path=this.apiUrl+"cars/getcardetaildto"
    return this.httpClient.get<ListResponseModel<Car>>(path);
  }
  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let path=this.apiUrl+"cars/getdetailbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }
  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let path=this.apiUrl+"cars/getdetailbycolorid?colorId="+colorId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }
  getCarDetailsById(id:number):Observable<ListResponseModel<CarDetail>>{
    let path=this.apiUrl+"cars/getdetailbyid?id="+id;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }



}
