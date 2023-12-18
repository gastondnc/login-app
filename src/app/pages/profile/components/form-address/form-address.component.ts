import { Component, ViewChild } from '@angular/core';



import { LiteralsService } from '../../../../services/literals.service';
import { PAGES } from 'src/app/models/pages.model';
import { User } from 'src/app/models/user.model';
import { UserService } from '../../../../services/user.service';
import { ModalComponent } from 'src/app/shared/modal/modal.component';

@Component({
  selector: 'form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent {
  @ViewChild('modal') modal: ModalComponent | null = null
  public literals: any = undefined;
  public user : User


  constructor(private literalsService: LiteralsService, private userService: UserService) {
    this.literals = this.literalsService.getLiteralByPage(PAGES.ADDRESS)

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
