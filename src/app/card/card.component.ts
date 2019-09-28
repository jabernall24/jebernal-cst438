import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cardTextCount: Number = document.querySelectorAll('.card-text').length;

  constructor() { 
  }

  ngOnInit() {
    
  }
  
  addProductToCart() {
    console.log("Item has been added to cart")
  }
}