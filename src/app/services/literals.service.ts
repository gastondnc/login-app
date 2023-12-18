import { Injectable } from '@angular/core';



import { LITERALS } from 'src/app/mocks/literals.mock';



@Injectable({
  providedIn: 'root'
})
export class LiteralsService {
  private literals: any = undefined;

  constructor() { }

  public setLiterals() {
    this.literals = LITERALS
    console.log(this.literals)
  }

  public getLiteralByPage(id: string): any{
    //this.literals.loadingLabel
    const page = this.literals.pages.find( (page:any) => id === page.id )

    const result = {
      ...page,
      ...this.literals.common
    }
    console.log(result)
    return result
  }

}







