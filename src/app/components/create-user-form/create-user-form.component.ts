import {
  Component,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
} from '@angular/core';
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
import { Iuser } from '../../models/iuser';

@Component({
  selector: 'app-create-user-form',
  templateUrl: './create-user-form.component.html',

  styleUrls: ['./create-user-form.component.css'],
})
export class CreateUserFormComponent {
  @Input() user: Iuser = { email: '', name: '', gender: '', status: '' };
  @Output() formSubmit = new EventEmitter<Iuser>();
  addUserForm!: FormGroup;
  reqLoading: boolean = false;
  isEditMode: boolean = false;
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
  ngOnChanges(changes: SimpleChanges) {
    if (changes['user'] && this.user) {
      this.addUserForm.patchValue({
        email: this.user.email,
        name: this.user.name,
        gender: this.user.gender,
        status: this.user.status,
      });
    }
  }
  onSubmit() {
    this.formSubmit.emit(this.addUserForm.value);
    this.addUserForm.reset();
  }
}
