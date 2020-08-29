import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { Page404Component } from './page404/page404.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'people-list',
    component: PeopleListComponent,
    canActivate: [AuthGuard],
  },
  { path: 'add-user', component: AddUserComponent, canActivate: [AuthGuard] },
  {
    path: 'update-user/:id',
    component: UpdateUserComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', component: Page404Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
