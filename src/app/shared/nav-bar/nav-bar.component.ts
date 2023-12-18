import { Router } from '@angular/router';
import { Component } from '@angular/core';


// Imports de estorno de desarrollo //
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  public btnTitle: string = 'Logout';


  constructor(
    private authService: AuthService,

  ) {
  }

  logout() {
    this.authService.logout()
  }

}



