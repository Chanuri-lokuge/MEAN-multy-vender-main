import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private router:Router,
    
    private cookieService: CookieService,
    ) { }

  logout(){
    this.cookieService.delete('name');
    this.cookieService.delete('email');
    this.router.navigate(['/login']);
  }
}

