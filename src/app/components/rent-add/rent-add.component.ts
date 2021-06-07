import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarDetail } from 'src/app/models/carDetail';
import { Customer } from 'src/app/models/customer';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';
import { CartService } from 'src/app/services/cart.service';
import { CustomerService } from 'src/app/services/customer.service';
import { FindexService } from 'src/app/services/findex.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-rent-add',
  templateUrl: './rent-add.component.html',
  styleUrls: ['./rent-add.component.css']
})
export class RentAddComponent implements OnInit {
  rentalAddForm:FormGroup
  customers:Customer[]=[];
  currentCar:CarDetail;
  rentDate:Date;
  returnDate:Date;
  totalPrice:number;
  filterCar:number;
  filterCustomer:number;

  constructor(
    private formBuilder:FormBuilder,
    private rentalService:RentalService,
    private carDetailService:CardetailService,
    private customerService:CustomerService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private toastrService:ToastrService,
    private cartService:CartService,
    private findexService:FindexService
  ) { }

  ngOnInit(): void {
    this.rentDate=new Date();
    this.returnDate=new Date();
    this.createRentalAddForm();
    this.getCustomers();
    this.activatedRoute.queryParams.subscribe((params) => {
      if (params['id']) {
        console.log('id', params['id'])
        this.getCarById(params['id']);
      }
    });
  }

  createRentalAddForm(){
    this.rentalAddForm=this.formBuilder.group({
      customerId:['',Validators.required],
      rentDate:['',Validators.required],
      carId:[''],
      returnDate:['']
    });
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe((response)=>{
      this.customers=response.data;
    });
  }
  getCarById(id:number){
    this.carDetailService.getCarDetailsById(id).subscribe(response=>{
      this.currentCar=response.data
      console.log(response)
    });
  }
  add(){
    if (this.rentalAddForm.valid) {
      let rentalModel=Object.assign({},this.rentalAddForm.value);
      rentalModel.carId=this.currentCar.id;
      rentalModel.brandName=this.currentCar.brandName;
      rentalModel.colorName = this.currentCar.colorName;
      rentalModel.description = this.currentCar.description;
      rentalModel.modelYear = this.currentCar.modelYear;
      rentalModel.dailyPrice = this.currentCar.dailyPrice;
      rentalModel.totalPrice = this.totalPrice;
      let customerPoint = this.findexService.getPointByCustomerId(
        rentalModel.customerId
      );
      this.router.navigate(['/payments',JSON.stringify(rentalModel)]);
   
      //   let carPoint = this.findexService.getPointByCarId(rentalModel.carId);
      //   if (customerPoint >= carPoint) {
        
      //       this.cartService.addToCart(rentalModel);
      //       this.toastrService.success(
      //         'Sepete eklendi',
      //     this.currentCar.brandName
      //       );  
      // } else {
      //   this.toastrService.error("Findex puanınız yetersiz","Hata")
        
      // }
  }
 }
 calculateTotalPrice(){
   let startDate=new Date(this.rentalAddForm.value.rentDate);
   let endDate=new Date(this.rentalAddForm.value.returnDate);
   if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
    this.totalPrice = 0;
  } else if (startDate > endDate) {
    this.totalPrice = 0;
  } else {
    let dateDiff = Math.floor(
      (endDate.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24
    );

    this.totalPrice = dateDiff * this.currentCar.dailyPrice;
  }

 }
}
