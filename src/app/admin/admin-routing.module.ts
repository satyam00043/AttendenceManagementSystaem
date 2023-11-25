import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterGuardService } from '../services/router-guard.service';
import { HelpDetailsComponent } from './help-details/help-details.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path:'',component:LayoutComponent,
    children:[
     {
        path:'dashboard',component:DashboardComponent,canActivate:[RouterGuardService]
      },{
        path:'help',component:HelpDetailsComponent,canActivate:[RouterGuardService]
      },{
        path:'user',component:UserComponent,canActivate:[RouterGuardService]
      },{
        path:'managr',component:ManageUsersComponent,canActivate:[RouterGuardService]
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
