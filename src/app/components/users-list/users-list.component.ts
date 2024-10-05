import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';
import { Iuser } from '../../models/iuser';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  usersList: Array<Iuser> = [];
  errorMessage: string = '';
  searchTerm: string = '';
  statusFilter: string = '';
  isLoading: boolean = false;
  constructor(private userService: UserServiceService) {}

  ngOnInit(): void {
    this.userService.getUsersList().subscribe({
      next: (users: Array<Iuser>) => {
        this.usersList = users;
      },
      error: (err: any) => {
        this.errorMessage = 'Failed to load users. Please try again later.';
        console.error('Error fetching users:', err);
      },
    });
  }
  deleteUder(user: Iuser) {
    if (user.id) {
      this.isLoading = true;
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          this.isLoading = true;
          this.usersList = this.usersList.filter(
            (u: Iuser) => u.id !== user.id
          );
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          console.log(this.isLoading);
          this.usersList = this.usersList.filter(
            (u: Iuser) => u.id !== user.id
          );
          this.isLoading = false;
        },
      });
    }
  }
}
