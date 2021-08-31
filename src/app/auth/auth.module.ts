import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthLayoutRoutes } from './auth-routing';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RegisterComponent } from './register/register.component';
import { ValidateComponent } from './validate/validate.component';
import { ValidategrComponent } from './validategr/validategr.component';

@NgModule({
  declarations: [AuthComponent, LoginComponent, RegisterComponent, ValidateComponent, ValidategrComponent],
  imports: [CommonModule, RouterModule.forChild(AuthLayoutRoutes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
