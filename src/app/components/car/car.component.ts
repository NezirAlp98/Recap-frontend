import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/services/car.service';
import { CardetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:Car[]=[];
  carDetails:CarDetail[]=[];
  carDetail:CarDetail;
  dataLoaded=false;

  constructor(private carService:CarService,private carDetailService:CardetailService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.getCars();
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarDetailsByBrand(params['brandId']);
      } 
    });
    this.activatedRoute.params.subscribe((params) => {
      if (params['colorId']) {
        this.getCarDetailsByColor(params['colorId']);
      } 
    });
  }
  getCars(){
    console.log("123");
    this.carDetailService.getCarDetails().subscribe(response=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }
  getCarDetailsByBrand(brandId:number){
    this.carDetailService.getCarDetailsByBrand(brandId).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;

    })
  }
  getCarDetailsByColor(colorId:number){
    this.carDetailService.getCarDetailsByColor(colorId).subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;

    })
  }
  getCarDetailsById(id:number){
    this.carDetailService.getCarDetailsById(id).subscribe(response=>{
      this.carDetail=response.data;
      this.dataLoaded=true;

    })
  }
  getCarImages(){
    this.carDetailService.getCarImages().subscribe(response=>{
      this.carDetails=response.data;
      this.dataLoaded=true;
    })
  }
 
}
