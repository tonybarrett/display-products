import { Component } from '@angular/core';
import { TESTDATA } from '../../testdata/products';
import { FormsModule } from '@angular/forms';
import { Product, ProductData } from '../../models/product.model';

@Component({
  selector: 'app-display',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './display.component.html',
  styleUrl: './display.component.scss'
})
export class DisplayComponent {
  products: Product[] = TESTDATA; //  pulls in the data which will eventually come from an API via a service and RxJS
  pageNumber: number = 1;
  itemsPerPage: number = 10;  //  a future enhancement would be to allow this to be change (via an <input>)
  maxPages: number = Math.floor(this.products.length / this.itemsPerPage) + 1;

  productsToDisplay: Product[] = this.products.slice(0, this.itemsPerPage);

  public onPageChange(): void {
    let start: number = (this.pageNumber - 1) * this.itemsPerPage;
    let end: number = start + this.itemsPerPage;
    this.productsToDisplay = this.products.slice(start, end);
  }

  public getFeatures(rawFeatures: ProductData | null): string {
    //  takes a object of features, removes quotes and curly braces and returns it
    let ret: string = JSON.stringify(rawFeatures);
    ret = ret.replace(/"+/g, ''); //  removes double quotes
    ret = ret.replace(/[{}]/g, ''); //  removes curly braces
    ret = ret.replace('null', '*'); //  replaces 'null' with an asterix
    return ret;
  }
}
