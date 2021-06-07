import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl="https://localhost:44316/api";

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let path=this.apiUrl+"/rentals/getrentaldetails"
    return this.httpClient.get<ListResponseModel<Rental>>(path)
  }
  getById(rentalId:number):Observable<ListResponseModel<Rental>>{
    let path=this.apiUrl+"/getbyid"
    return this.httpClient.get<ListResponseModel<Rental>>(path)

  }
  add(rental:Rental):Observable<ListResponseModel<Rental>>{
    let path=this.apiUrl+"/rentals/add";
    return this.httpClient.post<ListResponseModel<Rental>>(path,rental);
  }
  update(rental:Rental):Observable<ListResponseModel<Rental>>{
    let path=this.apiUrl+"/rentals/update";
    return this.httpClient.post<ListResponseModel<Rental>>(path,rental);
  }
}
