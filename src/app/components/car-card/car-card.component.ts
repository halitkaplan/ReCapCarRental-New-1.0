import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Car } from 'src/app/models/car';

import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarService } from 'src/app/service/car.service';
import { CarImageService } from "src/app/service/car-image.service";
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Component({
  selector: 'app-car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.scss']
})
export class CarCardComponent implements OnInit {
 

  cars:Car[]=[];

  dataLoaded =false;

  carDetails:CarDetail[]=[];

  carImages: CarImage[]=[];

  basePath="https://localhost:44323/"
  
  constructor(
    private carService:CarService,
    private carImageService:CarImageService,
    private activadetRoute:ActivatedRoute,
    private httpClient:HttpClient
    ) { }

  ngOnInit(): void {
   this.activadetRoute.params.subscribe((params)=>{
      
      
      if(params['brandId']){
        this.getCarsByBrand(params['brandId']);
      }
      else if (params['colorId']){
        this.getCarsByColor(params['colorId']);
      }
      else this.getCars();
      
      this.getCarImage();

      
      this.getCarDetail();
      
      
    })
    
  }

  getCarDetail(){
    this.carService.getCarDetails().subscribe((response)=>{
      this.carDetails=response.data
      this.dataLoaded=true;
    })
  }
  

  getCarImage(){
    this.carImageService.getCarImage().subscribe((response)=>{
      this.carImages=response.data;
    })
  }

  getCars(){
    this.carService.getCars().subscribe((response)=>{
      this.cars=response.data
      this.dataLoaded=true;
    })
    
  } 

 



  getCarsByBrand(brandId:number){
    this.carService.getCarsByBrandId(brandId).subscribe((response)=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  getCarsByColor(colorId:number){
    this.carService.getCarsByColorId(colorId).subscribe((response)=>{
      this.cars=response.data;
      this.dataLoaded=true;
    })
  }

  




}
