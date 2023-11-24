import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { AppUserService } from 'src/app/services/app-user.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { ThemeService } from 'src/app/services/theme.service';
import { GlobalConstants } from 'src/app/shared/global-constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
login() {
throw new Error('Method not implemented.');
}
  user:any;
username: any;
password: any;

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:[null,[Validators.required,Validators.pattern(GlobalConstants.emailRegex)]],
      password:[null,[Validators.required]]
    })
      
  }
  handleSubmit(){
    this.ngxService.start();
    var formData=this.loginForm.value;
    var data={
      email:formData.email,
      password:formData.password
    }
    this.appuserService.login(data).subscribe((response:any)=>{
      this.ngxService.stop();
      localStorage.setItem('token',response.token);
      this.router.navigate(['/article/dashboard']);
    },(error)=>{
      console.log(error);
      this.ngxService.stop();
      if(error.error?.message){
        this.responseMessage=error.error?.message;

      }
      else{
        this.responseMessage=GlobalConstants.genericError;
      }
      this.snackbarService.openSnackBar(this.responseMessage)
    })
  }
onBack(){
  this.router.navigate(['/']);
}

navigateToSignup() {
  this.router.navigate(['/signup']);

}
loginForm:any=FormGroup;
responseMessage:any;


constructor(private formBuilder:FormBuilder,
  private router:Router,
  private appuserService:AppUserService,
  private ngxService:NgxUiLoaderService,
  private snackbarService:SnackbarService,
  public themeService:ThemeService
  ){}

  // username:string='';
  // password:string='';
  // constructor(private router:Router){}
  // login(){
  //  alert('logging with this user name '+this.username);
  // }

}
