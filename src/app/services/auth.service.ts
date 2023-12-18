import { Injectable } from '@angular/core';

// Imports de entorno de desarrollo //
import { URL_LOGIN } from '../utils/endpoint';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlLogin: string = URL_LOGIN;


  constructor(private router?: Router) { }


  public login(user: User) {
    return fetch(this.urlLogin, {
      method: 'POST',
      body: this.getBody(user),
      headers: this.getHeaders(),
    })
      .then(res => res.json())
      .then(data => {
        this.setToken(data.token)
        return data

      })
      .catch(err => { throw new Error(err) })

  }

  public logout() {
    this.removeToken()
    this.router!.navigate([''])
  }

  private setToken(token: string) {
    localStorage.setItem('token', JSON.stringify(token))
  }

  public getToken(): string | null {
    return localStorage.getItem('token')
  }

  public removeToken() {
    localStorage.removeItem('token')
  }

  private getBody(user: User) {
    return JSON.stringify(
      {
        username: user.username,
        password: user.password
      }
    )
  }

  private getHeaders() {
    return {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    }
  }

}





