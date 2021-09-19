import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';
import { SingleResponseModel } from '../models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44323/api/";
  
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath = this.apiUrl +'car/getall';
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl + 'Car​/getcardetails';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }


  getCarsByBrandId(brandId:number):Observable<ListResponseModel<Car>>{
      let newPath = this.apiUrl +'Car/getbybrandid?=' + brandId;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColorId(colorId:number):Observable<ListResponseModel<Car>>{
      let newPath = this.apiUrl +'Car/getcarsbycolorid?=' + colorId;
      return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  GetCarDetailsByCarId(Id:number):Observable<SingleResponseModel<CarDetail>>{
    let newPath = this.apiUrl+"Cars/GetCarsDetailByCarId?Id="+Id

    return this.httpClient.get<SingleResponseModel<CarDetail>>(newPath)
  }

  
}

