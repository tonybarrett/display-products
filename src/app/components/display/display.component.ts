import { Component } from '@angular/core';
import { TESTDATA } from '../../testdata/products';
import { JsonPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { Product } from '../../models/product.model';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [
    JsonPipe,
    FormsModule
  ],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {
  products = TESTDATA;
  productsToDisplay = this.products;

  pageNumber: number = 1;
  itemsPerPage: number = 10;
  maxPages: number = Math.floor(this.products.length / this.itemsPerPage) + 1;

  constructor() {
    console.log('products: ', this.products);
    this.productsToDisplay = this.products.slice(0, this.itemsPerPage);
  }
    
  public onPageChange(): void {
    console.log('vdWENKKLESDFJ ', this.pageNumber)
    console.log(this.products)
    let start: number = (this.pageNumber - 1) * this.itemsPerPage;
    let end: number = start + this.itemsPerPage;
    this.productsToDisplay = this.products.slice(start, end);
  }
}
