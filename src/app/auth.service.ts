import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'https://localhost:44373/';
  token:any;

  constructor(private htto: HttpClient, private router: Router){}
    login(email: string, password: string){
      this.htto.post(this.uri + 'api/cuentas/login', {Email: email, Password: password})
      .subscribe((resp: any) => {
        this.router.navigate(['perfil']);
        localStorage.setItem('auth_token', resp.token);
      })
      
    }

    logout(){
      localStorage.removeItem('token');
    }

    logIn(): boolean{
        return (localStorage.getItem('token') !== null ? true : false);
    }


}
