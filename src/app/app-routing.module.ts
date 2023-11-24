import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { SignupComponent } from './page/signup/signup.component';
import { Login2 } from './page/login/login2';
import { HomeComponent } from './page/home/home.component';
import { RouterGuardService } from './services/router-guard.service';

const routes: Routes = [

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },{
    path:'article',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
    canActivate:[RouterGuardService]
  },
  {
    path:'loginas',
    component:Login2
  },{
    path:'',component:HomeComponent
  },
  {
    path:'**',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
