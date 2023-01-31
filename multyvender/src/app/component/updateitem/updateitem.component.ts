import { Component } from '@angular/core';
import { ProductService } from "../../service/product.service";
import { Product } from "../../../product";
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateitem',
  templateUrl: './updateitem.component.html',
  styleUrls: ['./updateitem.component.css']
})
export class UpdateitemComponent {
  
  products: Product[] = [];

  constructor(private productService: ProductService,private router:Router,private cookieService: CookieService){}

  ngOnInit(){
    this.productService.getProduct().subscribe((products) => (this.products = products));

  }

  logout(){
    this.cookieService.delete('name');
    this.cookieService.delete('email');
    this.router.navigate(['/login']);
  }

}
