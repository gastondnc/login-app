import { Component, ViewChild } from '@angular/core';


import { PAGES } from 'src/app/models/pages.model';
import { LiteralsService } from 'src/app/services/literals.service';
import { UserService } from '../../../../services/user.service';
import { User } from 'src/app/models/user.model';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'form-personal',
  templateUrl: './form-personal.component.html',
  styleUrls: ['./form-personal.component.css']
})
export class FormPersonalComponent {
  @ViewChild('modal') modal: ModalComponent | null = null
  public literals: any = undefined;
  public user: User

  constructor( private literalsService: LiteralsService, private userService: UserService) {
    this.literals = this.literalsService.getLiteralByPage(PAGES.PERSONAL)

    this.user = this.userService.getLoggedUser()
    console.log('desde user->',this.user)
  }

  onSubmit(){
    console.log('Submit Form')
    this.userService.updateUser(this.user)
                    .then(updated => this.showModalOk(updated))
                    .catch(err => this.showModalKo(err))
  }

  showModalOk(updated: User) {
    updated = this.user
    this.modal!.title = 'Success'
    this.modal!.description = `${updated.name?.firstname}, sus datos han sido actualizados sactifatoriamente`
    this.modal!.isError = false
    this.modal?.open()
  }

  showModalKo(err: string) {
    this.modal!.title = 'Error'
    this.modal!.description = err
    this.modal!.isError = true
    this.modal?.open()
  }

}
