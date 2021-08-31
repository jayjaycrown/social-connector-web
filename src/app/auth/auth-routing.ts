import { ValidategrComponent } from './validategr/validategr.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ValidateComponent } from './validate/validate.component';

export const AuthLayoutRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'validate/:id', component: ValidateComponent },
  { path: 'validategr/:id', component: ValidategrComponent },
];
// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: 'login',
//     pathMatch: 'full',
//   },
//   {
//     path: 'login',
//     component: LoginComponent,
//   },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class AuthPageRoutingModule {}
