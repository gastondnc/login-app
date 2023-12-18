import { Component } from '@angular/core';

// imports de etorno de desarrollo //
import { LiteralsService } from '../../services/literals.service';
import { PAGES } from 'src/app/models/pages.model';
import { User } from 'src/app/models/user.model';



@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
public literals: any = undefined;
public user: User = {
  email: '',
  password: '',
  username: '',
  name: {
    firstname: '',
    lastname: ''
  }
}


  constructor(private literalsService: LiteralsService){
    this.literals = this.literalsService.getLiteralByPage(PAGES.REGISTER)
  }

  onSubmit(form: any){
    console.log(this.user)
    console.log(form.valid)
  }





}
