// signup.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  reenterEmail: string = '';
  password: string = '';
  day: string = '';
  month: string = '';
  year: string = '';
  gender: string = '';
datePickerOptions: any;

dob: Date | undefined;

  signup() {
    // Implement your signup logic here
    console.log('Signing up with email:', this.email);
  }
}
