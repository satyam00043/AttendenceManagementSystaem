import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './page/navbar/navbar.component';
import { SignupComponent } from './page/signup/signup.component';
import { LoginComponent } from './page/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipPipe } from './page/signup/tooltip.pipe';
import { Login2 } from './page/login/login2';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './shared/material-module';
import { HttpClientModule } from '@angular/common/http';
import { NgxUiLoaderConfig, NgxUiLoaderModule, PB_DIRECTION, SPINNER } from 'ngx-ui-loader';
import { HomeComponent } from './page/home/home.component';





const ngxUiLoaderConfig:NgxUiLoaderConfig={
  text:"Loading....",
  textColor:"blue",
  textPosition:"center-center",
  pbColor:"white",
  bgsColor:"white",
  fgsColor:"white",
  fgsType:SPINNER.ballSpinClockwiseFadeRotating,
  fgsSize:100,
  pbDirection:PB_DIRECTION.leftToRight,
  pbThickness:5
};



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SignupComponent,
    LoginComponent,
    TooltipPipe,
    Login2,
    HomeComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,FlexLayoutModule,
    MaterialModule,
    HttpClientModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
