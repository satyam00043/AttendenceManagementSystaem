import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ThemeService } from 'src/app/services/theme.service';
import { ConfirmationComponent } from '../dialog/confirmation/confirmation.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  private dialogRefSubscription: Subscription | undefined;

  constructor(private dialog:MatDialog,
    private router:Router,
    public themeService:ThemeService){}
    logout(){
      const dialogConfig=new MatDialogConfig();
      dialogConfig.data={
        message:'LOGOUT'
      };
      const dialogRef=this.dialog.open(ConfirmationComponent,dialogConfig);
      const response=dialogRef.componentInstance.onEmitStatushange.subscribe((response:any)=>{
        dialogRef.close();
        localStorage.removeItem('token');
        this.router.navigate(['/']);
      })
    }
    changeTheme(color:any){
      this.themeService.setTheme(color);
    }

    ngOnDestroy() {
      // Unsubscribe to prevent memory leaks
      if (this.dialogRefSubscription) {
        this.dialogRefSubscription.unsubscribe();
      }
    }

  

}
