import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  constructor(private router:Router,
   
    private cookieService: CookieService) { }


  logout(){
    this.cookieService.delete('name');
    this.cookieService.delete('email');
    this.router.navigate(['/login']);
  }



}


