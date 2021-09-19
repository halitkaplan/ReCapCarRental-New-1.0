import { Component, OnInit, ViewContainerRef, Directive, ElementRef } from '@angular/core';
import { css } from 'glamor';
import 'vanilla-tilt';




@Component({
  selector: 'app-card-information',
  templateUrl: './card-information.component.html',
  styleUrls: ['./card-information.component.scss']
})
export class CardInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
