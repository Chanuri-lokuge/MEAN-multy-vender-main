import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from "../../service/product.service";
import { OrderService } from "../../service/order.service";
import { RatingService } from "../../service/rating.service";
import { Product } from "../../../product";
import { Order } from "../../../order";
import { Rating } from "../../../rating";
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  products: Product[] = [];
  orders: Order[] = [];
  ratings: Rating[] = [];
  email!:string;

  constructor(private router:Router,
    private productService: ProductService,
    private orderService: OrderService,
    private cookieService: CookieService,
    private ratingService: RatingService) { }

  ngOnInit(){
    this.orderService.getOrder().subscribe((orders) => (this.orders = orders));
    this.productService.getProduct().subscribe((products) => (this.products = products));

    this.email = this.cookieService.get('email');


  }

  addrate(productid: String){

    const newRating:Rating= {
      productid: productid,
      level: "1",
     };

    this.ratingService.addrating(newRating).subscribe((newRating) => this.ratings.push(newRating));

  }

  logout(){
    this.cookieService.delete('name');
    this.cookieService.delete('email');
    this.router.navigate(['/login']);
  }


}
