import { Component } from '@angular/core';
import { Product } from 'src/product';
import {ProductService  } from "../../service/product.service";
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent {

  title!:String;
  catagory!:String;
  discount!:String;
  price!:string;
  dis!:String;
  img!:String;

  products:Product[] = [];

  constructor(private productService: ProductService, private cookieService: CookieService,private router:Router){}

  addProduct(){
    let email = this.cookieService.get('email');
    const newProduct = {
      title : this.title,
      catagory : this.catagory,
      discount : this.discount,
      price : this.price,
      dis : this.dis,
      img : this.img,
      seller:email,
    }

    this.productService.addProduct(newProduct).subscribe((newProduct) => this.products.push(newProduct));

    this.title = "";
    this.catagory = "";
    this.discount = "";
    this.price = "";
    this.dis = "";
    this.img = "";
  }





  logout(){
    this.cookieService.delete('name');
    this.cookieService.delete('email');
    this.router.navigate(['/login']);
  }

}
