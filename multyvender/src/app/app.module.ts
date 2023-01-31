import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './component/about/about.component';
import { NavComponent } from './component/nav/nav.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { ShopComponent } from './component/shop/shop.component';
import { CartComponent } from './component/cart/cart.component';
import { ProductComponent } from './component/product/product.component';
import { AdminComponent } from './component/admin/admin.component';
import { AdditemComponent } from './component/additem/additem.component';
import { AdminsidebarComponent } from './component/adminsidebar/adminsidebar.component';
import { OrdersComponent } from './component/orders/orders.component';
import { UpdateitemComponent } from './component/updateitem/updateitem.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { UserComponent } from './component/user/user.component';
import { UsersidebarComponent } from './component/usersidebar/usersidebar.component';
import { ChatComponent } from './component/chat/chat.component';
import { ChatUserComponent } from './component/chat-user/chat-user.component';
import { UserchatComponent } from './component/userchat/userchat.component';





@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    ShopComponent,
    CartComponent,
    ProductComponent,
    AdminComponent,
    AdditemComponent,
    AdminsidebarComponent,
    OrdersComponent,
    UpdateitemComponent,
    LoginComponent,
    RegisterComponent,
    UserComponent,
    UsersidebarComponent,
    ChatComponent,
    ChatUserComponent,
    UserchatComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
