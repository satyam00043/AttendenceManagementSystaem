import { Component, OnInit } from '@angular/core';
import { AppUserService} from '../../services/app-user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;

  constructor(private userService: AppUserService) { }

  ngOnInit(): void {
    this.fetchAppUsers();
  }

  fetchAppUsers(): void {
    this.userService.getAppuser().subscribe(
      (data) => {
        this.users = data as any;
      },
      (error) => {
        console.error('Error fetching app users:', error);
      }
    );
  }
}
