import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CardPayment } from '../models/cardPayment';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CardPaymentService {

  apiUrl="https://localhost:44316/api/";

  constructor(private httpClient:HttpClient) { }

  getPayments():Observable<ListResponseModel<CardPayment>>{
    let path=this.apiUrl+"payments/getall";
    return this.httpClient.get<ListResponseModel<CardPayment>>(path);
  }
  addPayments(cardPayment:CardPayment):Observable<ListResponseModel<CardPayment>>{
    let path=this.apiUrl+"payments/add";
    return this.httpClient.get<ListResponseModel<CardPayment>>(path);
  }
}
