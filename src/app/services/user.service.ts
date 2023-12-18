import { Injectable } from '@angular/core';



import { User } from '../models/user.model';
import { URL_USERS } from '../utils/endpoint';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User | undefined = undefined;
  private urlUser: string = URL_USERS;

  constructor() { }

  public getUserById(id: string) {
    return fetch(`${this.urlUser}/${id}`)
      .then(resp => resp.json())
      .then(data =>  data)
      .catch( err => {throw new Error(err)} )

  }

  setLoggedUser(user: User): void {
    this.user = user;
  }

  getLoggedUser(): User{
    return this.user as User;
  }

  updateUser(user: User) {
    return fetch(`${this.urlUser}/${user.id}`, {
      method: 'PATCH',
      body: JSON.stringify(user),
    })
    .then(resp => resp.json())
    .then( data => data )
    .catch(err => {throw new Error(err)})
  }


}
