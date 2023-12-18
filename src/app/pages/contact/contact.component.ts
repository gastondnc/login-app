import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  public user: User


  constructor(private userService: UserService) {

    this.user = this.userService.getLoggedUser()
    console.log(this.user)

  }

}
