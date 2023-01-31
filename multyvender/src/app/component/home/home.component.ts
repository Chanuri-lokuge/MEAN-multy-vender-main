import { Component } from '@angular/core';
import { ProductService } from "../../service/product.service";
import { Product } from "../../../product";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  products: Product[] = [];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getProduct().subscribe((products) => (this.products = products));

  }

}
