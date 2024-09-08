import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';

interface User {
  id?: number;
  email: string;
  name: string;
  gender: string;
  status: string;
}

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList: User[] = [];
  errorMessage: string = '';

  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.getUsersList().subscribe({
      next: (users: User[]) => {
        this.usersList = users;
        console.log(this.usersList);
      },
      error: (err: any) => {
        this.errorMessage = 'Failed to load users. Please try again later.';
        console.error('Error fetching users:', err);
      },
    });
  }
}
