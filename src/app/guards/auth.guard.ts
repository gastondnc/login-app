import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const auth: AuthService = new AuthService()
  const router: Router = new Router()
  const result = auth.getToken()
  if(result !== null){
    return true;
  } else {
    router.navigate([''])
    return false;
  }

};
