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

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',

  styleUrls: ['./create-user-form.component.css'],
})
export class CreateUserFormComponent {
  addUserForm!: FormGroup;
  constructor(private fb: FormBuilder) {
    this.addUserForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      gender: [null, Validators.required],
    });
  }
  addUserSubmit(vale: any) {
    console.log(vale);
  }
}
