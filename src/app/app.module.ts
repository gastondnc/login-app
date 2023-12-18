import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  RouterModule, Routes } from '@angular/router';


// Imports de entorno de desarrollo //
import { AppComponent } from './app.component';
import { LoginFormComponent } from './pages/login-form/login-form.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './pages/profile/profile.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ModalComponent } from './shared/modal/modal.component';
import { FormPersonalComponent } from './pages/profile/components/form-personal/form-personal.component';
import { FormAddressComponent } from './pages/profile/components/form-address/form-address.component';
import { authGuard } from './guards/auth.guard';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { SiteLayoutComponent } from './layouts/site-layout/site-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RegisterFormComponent } from './pages/register-form/register-form.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'register'
      },
      {
        path: 'login',
        component: LoginFormComponent
      },
      {
        path: 'register',
        component: RegisterFormComponent
      }
    ]
  },

  {
    path: '',
    component: SiteLayoutComponent,
    canActivateChild: [authGuard],
    children: [
      {
        path: 'profile',
        component: ProfileComponent,
      },

      {
        path: 'personal',
        component: FormPersonalComponent
      },
      {
        path: 'address',
        component: FormAddressComponent
      },

      {
        path: 'contact',
        component: ContactComponent,
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProfileComponent,
    ContactComponent,
    ModalComponent,
    FormPersonalComponent,
    FormAddressComponent,
    NavBarComponent,
    SiteLayoutComponent,
    AuthLayoutComponent,
    NotFoundComponent,
    RegisterFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
