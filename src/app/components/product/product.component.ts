import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product: any = {
    productID: 1,
    categoryID: 1,
    productName: 'Masa',
    unitsInStock: 5,
    unitPrice: 200,
  };
  product1: any = {
    productID: 2,
    categoryID: 1,
    productName: 'Sandalye',
    unitsInStock: 5,
    unitPrice: 200,
  };
  product2: any = {
    productID: 3,
    categoryID: 1,
    productName: 'Avize',
    unitsInStock: 5,
    unitPrice: 200,
  };
  product3: any = {
    productID: 4,
    categoryID: 1,
    productName: 'Laptop',
    unitsInStock: 5,
    unitPrice: 200,
  };
  product4: any = {
    productID: 5,
    categoryID: 1,
    productName: 'Fare',
    unitsInStock: 5,
    unitPrice: 200,
  };

  products = [
    this.product,
    this.product1,
    this.product2,
    this.product3,
    this.product4,
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
