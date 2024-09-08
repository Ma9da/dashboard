import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';

const routes: Routes = [
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'create-user',
    component: CreateUserFormComponent,
  },
  {
    path: 'users',
    component: UsersListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
