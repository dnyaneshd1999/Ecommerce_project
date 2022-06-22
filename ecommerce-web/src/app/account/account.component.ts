import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private _productservice: ProductService) { }

  products: Array<Product> = new Array<Product>();
  ngOnInit(): void {

    this._productservice.getProducts().subscribe(res => this.products = res, err => console.log(err))
  }

}