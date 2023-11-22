import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login2.html',
  styleUrls: ['./login2.css']
})
export class Login2 {
  constructor(private router: Router) {}
  

  login(role: string): void {
    switch (role) {
      case 'student':
        this.router.navigate(['/login']);
        break;
      case 'teacher':
        this.router.navigate(['/login']);
        break;
      case 'admin':
        this.router.navigate(['/login']);
        break;
      default:
        // Handle unexpected role
        break;
    }
  }
}
