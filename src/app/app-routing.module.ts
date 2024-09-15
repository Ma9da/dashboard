import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { UsersListComponent } from './components/users-list/users-list.component';
import { AppComponent } from './app.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { CreateUserPageComponent } from './components/create-user-page/create-user-page.component';

const routes: Routes = [
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'create-user',
    component: CreateUserPageComponent,
    title: 'Create a user',
  },
  {
    path: 'users',
    component: UsersListComponent,
    title: 'display all Users',
  },
  {
    path: 'users/:id',
    component: UserPageComponent,
    title: 'user',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
