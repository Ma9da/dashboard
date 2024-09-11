import { Component } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
interface User {
  id?: number;
  email: string;
  name: string;
  gender: string;
  status: string;
}
@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {
  user: User = { email: '', name: '', gender: '', status: '' };
  isEditing: boolean = false;
  isLoading: boolean = true;
  isDeleted: boolean = false;
  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    const userId: any = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (user) => {
          this.user = user;
          this.isLoading = true;
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    } else {
      this.isLoading = false;
    }
  }
  editUser(user: User) {
    this.isEditing = true;
    this.userService.editUser(this.user.id, user).subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.isEditing = false;
      },
    });
  }
  editingMode() {
    this.isEditing = !this.isEditing;
  }
  deleteUser(user: User) {
    if (user.id) {
      this.userService.deleteUser(user.id).subscribe({
        next: () => {
          console.log('deleted successfully');
          this.user = { email: '', name: '', gender: '', status: '' };
        },
        error: (err) => {
          console.error(err);
        },
        complete: () => {
          this.isDeleted = true;
        },
      });
    }
  }
}
