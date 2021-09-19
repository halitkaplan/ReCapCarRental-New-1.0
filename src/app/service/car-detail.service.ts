import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  
  apiUrl="https://localhost:44323/api/";
  
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetail>>{
    let newPath = this.apiUrl +'car/getall';
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

  getCarDetails():Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"​/api​/Car​/getcardetails";
    return this.httpClient.get<ListResponseModel<CarDetail>>(newPath);
  }

}
