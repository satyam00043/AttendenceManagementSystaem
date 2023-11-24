import { Component, EventEmitter,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  onEmitStatushange=new EventEmitter();
  details: any={};
 
  constructor(@Inject (MAT_DIALOG_DATA) public dilogData:any,
  public themeService:ThemeService){}
  ngOnInit(): void {
    if(this.dilogData){
      this.details=this.dilogData
    }
}
handelChangeAction(){
  this.onEmitStatushange.emit();
}

}
