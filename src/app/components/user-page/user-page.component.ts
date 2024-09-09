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
  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    const userId: any = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService
        .getUserById(userId)
        .subscribe((user) => (this.user = user));
    }
  }
  editUser(user: User) {
    this.isEditing = true;
    this.userService.editUser(this.user.id, user).subscribe({
      next: (response) => {
        this.user = response;
      },
      error: (err) => console.error(err),
    });
  }
  editingMode() {
    this.isEditing = !this.isEditing;
  }
}
