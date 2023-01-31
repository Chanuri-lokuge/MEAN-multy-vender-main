import { Component } from '@angular/core';
import { User } from "../../../user";
import { UserService } from "../../service/user.service";
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  email!:String;
  password!:String;
  err!:String;

  users:User[] = [];

  constructor (private userService: UserService, private router:Router, private cookieService: CookieService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((users) => (this.users = users));

  }

  login(){

    let le = "";
    let ro = "";

    if (this.email != null && this.password != null) {
      this.users.forEach(element => {
        if (element.email == this.email && element.password == this.password) {
          this.cookieService.set('name', element.name);
          this.cookieService.set('email', element.email);
          le = "1";
          ro = element.role;
          this.gopage(le,ro);

        }else{
          le = "0";
        }

      });
    }else{
      this.err = "Fill all the filds"
    }

  }

  gopage(l: any,r: any){
    if (l == "1" && r == '1') {
      this.router.navigate(['/admin']);
    } else if(l == "1" && r == '2'){
      this.router.navigate(['/home']);
    }
    else if (l == "0") {
      alert('There are some erro with your inputs. please correct them');
    }
  }

}
