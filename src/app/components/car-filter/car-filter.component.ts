import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/service/brand.service';
import { ColorService } from 'src/app/service/color.service';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.scss']
})
export class CarFilterComponent implements OnInit {

    brands: Brand[]=[];
    colors: Color[] = [];
    currentBrand:Brand;

  constructor(
    private brandService:BrandService,
    private colorService: ColorService,
    private activatedRoute:ActivatedRoute
    ) { }

  ngOnInit(): void {

    
      this.getBrands();
      this.getColors();
      
  } 

  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
  }

 

  getBrands(){
    this.brandService.getBrands().subscribe((response)=>{
      this.brands=response.data;
    })
  }

  

  getColors(){
    this.colorService.getColors().subscribe((response)=>{
      this.colors=response.data;
    })
  }


}
