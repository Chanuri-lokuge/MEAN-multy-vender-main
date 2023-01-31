import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./component/about/about.component";
import { NavComponent } from "./component/nav/nav.component";
import { FooterComponent } from "./component/footer/footer.component";
import { HomeComponent } from "./component/home/home.component";
import { ShopComponent } from "./component/shop/shop.component";
import { CartComponent } from "./component/cart/cart.component";
import { ProductComponent } from "./component/product/product.component";
import { AdminComponent } from "./component/admin/admin.component";
import { AdditemComponent } from "./component/additem/additem.component";
import { AdminsidebarComponent } from "./component/adminsidebar/adminsidebar.component";
import { OrdersComponent } from "./component/orders/orders.component";
import { UpdateitemComponent } from "./component/updateitem/updateitem.component";
import { LoginComponent } from "./component/login/login.component";
import { RegisterComponent } from "./component/register/register.component";
import { UserComponent } from "./component/user/user.component";
import { ChatComponent } from "./component/chat/chat.component";
import { ChatUserComponent } from "./component/chat-user/chat-user.component"
import { UserchatComponent } from "./component/userchat/userchat.component";




const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'about', component: AboutComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'home', component: HomeComponent},
  { path: 'shop', component: ShopComponent},
  { path: 'cart', component: CartComponent},
  { path: 'product/:id', component: ProductComponent},
  //{ path: 'admin', component: AdminComponent},

  { path: 'additem', component: AdditemComponent},
  { path: 'adminsidebar', component: AdminsidebarComponent},
  { path: 'orders', component: OrdersComponent},
  { path: 'admin', pathMatch: 'full', redirectTo: 'updateitem' },
  { path: 'updateitem', component: UpdateitemComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'user', component: UserComponent},
  { path: 'chat', component: ChatComponent},
  { path: 'chatuser/:id', component: ChatUserComponent},
  { path: 'userchat', component: UserchatComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
