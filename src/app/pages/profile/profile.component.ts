import { Component, OnInit } from '@angular/core';


// Imports de entorno de desarrollo //
import { LiteralsService } from '../../services/literals.service';
import { PAGES } from 'src/app/models/pages.model';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  public literals: any = undefined;
  private user: User | undefined = undefined;
  public selectedForm: string = 'address';

  constructor(private literalsService: LiteralsService, private userService: UserService){
    this.user = this.userService.getLoggedUser();
    console.log(this.user);
  }

  ngOnInit(): void {
    this.literals = this.literalsService.getLiteralByPage(PAGES.PROFILE)
  }

  changeForm(form: string) {
    this.selectedForm = form;
  }

}
