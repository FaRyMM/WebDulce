import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WebDulce';
  proba = true;


  constructor(public authService: AuthService){}

login(){
 return this.authService.logIn();
}

  logout(){
    console.log("Adios!");
    this.authService.logout()
  }
}
