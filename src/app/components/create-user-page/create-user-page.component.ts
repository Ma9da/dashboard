import { Component } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';
import { Iuser } from '../../models/iuser';

@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrl: './create-user-page.component.scss',
})
export class CreateUserPageComponent {
  constructor(private userService: UserServiceService) {}
  reqLoading: boolean = false;
  user: Iuser = { email: '', name: '', gender: '', status: '' };
  handleSubmit(user: Iuser) {
    this.reqLoading = true;
    this.userService.createUser(user).subscribe({
      next: (response) => {
        this.user = response;
        this.reqLoading = false;
      },
      error: (err) => {
        this.reqLoading = false;
        console.error('Error creating user:', err);
      },
    });
  }
}
