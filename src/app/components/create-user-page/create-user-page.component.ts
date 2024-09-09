import { Component } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';
interface User {
  id?: number;
  email: string;
  name: string;
  gender: string;
  status: string;
}
@Component({
  selector: 'app-create-user-page',
  templateUrl: './create-user-page.component.html',
  styleUrl: './create-user-page.component.scss',
})
export class CreateUserPageComponent {
  constructor(private userService: UserServiceService) {}
  reqLoading: boolean = false;
  user: User = { email: '', name: '', gender: '', status: '' };
  handleSubmit(user: User) {
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
