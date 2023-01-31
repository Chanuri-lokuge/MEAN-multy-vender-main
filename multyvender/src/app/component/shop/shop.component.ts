import { Component } from '@angular/core';
import { ProductService } from "../../service/product.service";
import { Product } from "../../../product";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {

  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getProduct().subscribe((products) => (this.products = products));

  }
}
