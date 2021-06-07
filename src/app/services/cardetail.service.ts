import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardetailService {

  constructor(private httpClient:HttpClient) { }
  apiUrl="https://localhost:44316/api/";
  
  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let path=this.apiUrl+"cars/getcardetaildto"
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }
  getCarDetailsByBrand(brandId:number):Observable<ListResponseModel<CarDetail>>{
    let path=this.apiUrl+"cars/getdetailbybrandid?brandId="+brandId;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }
  getCarDetailsByColor(colorId:number):Observable<ListResponseModel<CarDetail>>{
    let path=this.apiUrl+"cars/getdetailbycolorid?colorId="+colorId;;
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }
  getCarDetailsById(id:number):Observable<SingleResponseModel<CarDetail>>{
    let path=this.apiUrl+"cars/getdetailbyid?id="+id;
    return this.httpClient.get<SingleResponseModel<CarDetail>>(path);
  }
  getCarImages(): Observable<ListResponseModel<CarDetail>> {
    let path  = this.apiUrl+ "carimages/getall"
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }
  getCarImagesByCarId(carId:number):Observable<ListResponseModel<CarDetail>>{
    let path  = this.apiUrl+ "carimages/getimagesbycarid?carId="+carId
    return this.httpClient.get<ListResponseModel<CarDetail>>(path);
  }
}
