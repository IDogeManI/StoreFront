import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminLoginComponent } from './admin.login/admin.login.component';
import { UserSpaceComponent } from './user.space/user.space.component';
import { AdminSpaceComponent } from './admin.space/admin.space.component';
import { AppRouterModule } from './app.router/app.router.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminMainComponent } from './admin.main/admin.main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    CartComponent,
    AdminLoginComponent,
    UserSpaceComponent,
    AdminSpaceComponent,
    AdminMainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouterModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
