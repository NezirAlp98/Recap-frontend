import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { Car } from 'src/app/models/car';
import { CardPayment } from 'src/app/models/cardPayment';
import { Rental } from 'src/app/models/rental';
import { ResponseModel } from 'src/app/models/responseModel';
import { CardPaymentService } from 'src/app/services/card-payment.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  rental: Rental;
  car: Car;
  nameOnTheCard: string;
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  moneyInTheCard: number;
  totalPrice: number;
  carId: number;

  constructor(
    private paymentService: CardPaymentService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private rentalService: RentalService,
    private carDetaisService: CardetailService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['rental']) {
        this.rental = JSON.parse(params['rental']);
        this.carId = Number(this.car.id);
        this.totalPrice = Number(this.car.dailyPrice);
      }
    });
  }
  rentACar(){
    console.log(this.rental)
    this.rentalService.add(this.rental).subscribe(response=>{
      this.toastrService.success("Başarılı,kiralama işlemi tamamlandı")
    })
    this.router.navigate(['/cars/detail/' + this.carId])
  }

 
 

}
