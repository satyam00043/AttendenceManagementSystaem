import { Component } from '@angular/core';

import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

name1='satyam kumar';
name2='riyasen gupta';
name3='hrishikesh jayshwal'
  constructor(public themeService:ThemeService){

  }
  changeTheme(color:any){
    this.themeService.setTheme(color);
  }

}
