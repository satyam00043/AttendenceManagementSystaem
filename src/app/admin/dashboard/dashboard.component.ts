import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AppUserService } from 'src/app/services/app-user.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ThemeService } from 'src/app/services/theme.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  displayedColumn:string[]=['name','email','status','edit'];
  dataSource:any;
  responseMessage:any;
  constructor(private ngxService:NgxUiLoaderService,
    private dialog:MatDialog,
    private snackbarService:SnackbarService,
    private router:Router,
    private appuserService:AppUserService,
    public themeService:ThemeService){}
    tableData(){
      this.appuserService.getAllAppuser().subscribe((response:any)=>{
        this.ngxService.stop();
        this.dataSource=new MatTableDataSource(response);
      },(error:any)=>{
        console.log(error);
        if(error.error?.message){
          this.responseMessage=error.error?.message;
        }else{
          this.responseMessage=GlobalConstants.genericError;
        }
        this.snackbarService.openSnackBar(this.responseMessage);
      }
      
      )

    }
      applyFilter(event:any){
        const FilterValue=(event.target as HTMLInputElement).value;
        this.dataSource.filter=FilterValue.trim().toLowerCase();
      }
      handelAddAction(){}
      handelEditAction(value:any){}
}
