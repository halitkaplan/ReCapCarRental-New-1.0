import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="https://localhost:44323/api/";
  constructor(private httpClient:HttpClient) { }

  getCarImage():Observable<ListResponseModel<CarImage>>{
    return this.httpClient
    .get<ListResponseModel<CarImage>>(this.apiUrl + "CarImages/getall");
    }

    getImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
      let newPath = this.apiUrl +'CarImages/getbycarid?carId=' + carId;
      return this.httpClient.get<ListResponseModel<CarImage>>(newPath);
    };

    getFileById(imageId:number):Observable<string>{
     return this.httpClient.get<string>(this.apiUrl + "​CarImages​/getfilebyid?=" + imageId)
    }

    getCarImageUrl(imageId:number):string{
      return this.apiUrl + "​CarImages​/getfilebyid?=" + imageId
    }

    
}

  
  

