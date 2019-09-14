import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  test: string = "logo.png";
  // product: Product;

  constructor() { 
  }

  ngOnInit() {
  }

}