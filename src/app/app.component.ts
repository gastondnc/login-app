import { Component } from '@angular/core';


// Imports de entorno de desarrollo //
import { LiteralsService } from './services/literals.service';
import { PAGES } from './models/pages.model';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public loginLiterals: any = undefined;

  constructor(private literalsService: LiteralsService) {
    this.literalsService.setLiterals()
    setTimeout(() => {
      this.loginLiterals = this.literalsService.getLiteralByPage(PAGES.LOGIN)
    }, 0);
  }

}









