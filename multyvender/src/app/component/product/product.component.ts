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
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  products: Product[] = [];
  orders: Order[] = [];
  ratings: Rating[] = [];
  id!:string;
  img!:string;
  email!:string;
  likes = 0;

  private routeSub: Subscription = new Subscription;
  constructor(private route: ActivatedRoute,
    private router:Router, private productService: ProductService,
    private orderService: OrderService,
    private cookieService: CookieService,
    private ratingService: RatingService) { }

  ngOnInit(){
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id) //log the entire params object
      // console.log(params['id']) //log the value of id
    });
    this.productService.getProduct().subscribe((products) => (this.products = products));
    this.ratingService.getrating().subscribe((ratings) => (ratings.forEach(element => {
      if (element.productid == this.id) {
        this.likes = this.likes + 1;
        console.log(this.likes);

      }
    })));

    this.email = this.cookieService.get('email');

    console.log(this.ratings);


    this.ratings.forEach(element => {
      if (element.productid == this.id) {
        this.likes = this.likes + 1;
        console.log(this.likes);

      }
    });




  }

  buynow(){
    const newOrder: Order = {
      cusid:this.email,
      productid:this.id,
    };

    this.orderService.addOrder(newOrder).subscribe((newTask) => this.orders.push(newOrder));

    this.router.navigate(['/user']);

  }

}
