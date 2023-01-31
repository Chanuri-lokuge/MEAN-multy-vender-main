import { Component } from '@angular/core';
import { ChatService } from "../../service/chat.service";
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat-user',
  templateUrl: './chat-user.component.html',
  styleUrls: ['./chat-user.component.css']
})
export class ChatUserComponent {

  sMessage = '';
  email!:string;

  newMessage = {};
  messageList: string[] = [];
  id!:string

  private routeSub: Subscription = new Subscription;
  constructor(private route: ActivatedRoute, private router:Router, private chatService: ChatService, private cookieService: CookieService){

  }

  ngOnInit(){
    this.email = this.cookieService.get('email');

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id) //log the entire params object
      // console.log(params['id']) //log the value of id
    });

    this.chatService.getNewMessage().subscribe((message: string) => {
      this.messageList.push(message);
      console.log('====================================');
      console.log(message);
      console.log('====================================');
    })
  }

  sendMessage() {
    this.newMessage = this.id+" from "+this.email+" : "+this.sMessage;
    this.chatService.sendMessage(this.newMessage);
    this.sMessage = '';
  }

}
