import { Component } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable, Observer } from 'rxjs';
import { UserServiceService } from '../../services/userService.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',

  styleUrls: ['./create-user-form.component.css'],
})
export class CreateUserFormComponent {
  addUserForm!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserServiceService
  ) {
    this.addUserForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      gender: [null, [Validators.required]],
      status: ['', [Validators.required]],
    });
  }
  addUserSubmit() {
    if (this.addUserForm.valid) {
      this.userService.createUser(this.addUserForm.value).subscribe({
        next: (response: any) => {
          console.log('User created:', response);
          this.addUserForm.reset();
        },
        error: (err: any) => {
          console.error('Error creating user:', err);
        },
      });
    }
  }
}
