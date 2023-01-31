import { Component } from '@angular/core';
import { ChatService } from "../../service/chat.service";
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  sMessage = '';
  email!:string;

  newMessage = {};
  messageList: string[] = [];

  constructor(private chatService: ChatService, private cookieService: CookieService,private router:Router){

  }

  ngOnInit(){
    this.email = this.cookieService.get('email');

    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
      console.log('====================================');
      console.log(message);
      console.log('====================================');
    })
  }

  sendMessage() {
    this.newMessage = this.email+" : "+this.sMessage;
    this.chatService.sendMessage(this.newMessage);
    this.sMessage = '';
  }


  logout(){
    this.cookieService.delete('name');
    this.cookieService.delete('email');
    this.router.navigate(['/login']);
  }

}
