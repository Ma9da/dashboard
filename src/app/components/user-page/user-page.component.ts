import { Component } from '@angular/core';
import { UserServiceService } from '../../services/userService.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrl: './user-page.component.scss',
})
export class UserPageComponent {
  user!: any;
  constructor(
    private userService: UserServiceService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const userId: any = this.route.snapshot.paramMap.get('id');
    console.log(userId);
    if (userId) {
      this.userService
        .getUserById(userId)
        .subscribe((user) => (this.user = user));
    }
  }
}
