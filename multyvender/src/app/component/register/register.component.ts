import { Component } from '@angular/core';
import { User } from "../../../user";
import { UserService } from "../../service/user.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  name!:string;
  email!: string;
  tel!:string;
  password!:string;
  repassword!:string;
  role!:string;
  err!:string;

  users:User[] = [];

  constructor(private userService: UserService, private router:Router) {}



  addaddUser(){

    if (this.name != null && this.email != null && this.password != null && this.repassword !=  null) {
      if (this.password == this.repassword) {

        const newUser:User = {
          name : this.name,
          email : this.email,
          tel : this.tel,
          password : this.password,
          role:"2",

        };

        this.userService.addUser(newUser).subscribe((newUser) => this.users.push(newUser));

        this.router.navigate(['/login']);

      }else{
        this.err = "Passwords are does not match";
      }
    } else {
      this.err = "Fill all the filds";
    }




  }
}
