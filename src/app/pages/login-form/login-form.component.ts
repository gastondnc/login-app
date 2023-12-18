import { Component, ViewChild } from '@angular/core';

// imports de entorno de desarrollo //
import { PAGES } from 'src/app/models/pages.model';
import { User } from 'src/app/models/user.model';
import { LiteralsService } from 'src/app/services/literals.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from '../../services/auth.service';
import { USERS_MOCK } from 'src/app/mocks/users.mock';
import { Router } from '@angular/router';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  @ViewChild('modal') modal: ModalComponent | null = null;
  public literals: any = undefined;
  public user: User = {username: '', password: ''};
  public users: User[] = USERS_MOCK;



  constructor(private literalsService: LiteralsService, private userService: UserService, private authService: AuthService, private router: Router){
    this.literals = this.literalsService.getLiteralByPage(PAGES.LOGIN)
    console.log(this.literals)
  }

  onSubmit(){
    this.authService.login(this.user)
                    .then(data => this.findIdUser())
                    .catch(err => this.showModal(err) )
  }

  findIdUser() {
    const finded: User | undefined =  this.users.find( user => user.username === this.user.username && user.password === this.user.password )
    const id: string = `${finded!.id}`
    this.userService.getUserById(id)
                    .then(userLogged => {
                      this.userService.setLoggedUser(userLogged)
                      this.router.navigate(['profile'])
                    })
                    .catch(err => console.log(err))
  }

  showModal(err: string) {
    this.modal!.isError = true
    this.modal!.title = 'Ups Error'
    this.modal!.description = err
    this.modal?.open()
  }

}












