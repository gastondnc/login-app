import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output('on-close') onCloseEmitter: EventEmitter<boolean> = new EventEmitter()
  public title: string = '';
  public description : string = '';
  public isOpen: boolean = false;
  public isError: boolean = true;


  constructor(){}

  open(){
    this.isOpen = true;
  }

  close() {
    this.onCloseEmitter.emit(true)
    this.isOpen = false;
  }


}








