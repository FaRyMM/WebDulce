import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  email = "";
  password = "";

  constructor(private authService: AuthService) { }

  Login(){
    console.log("Estas logueado!");
    this.authService.login(this.email, this.password)
  }

  ngOnInit(): void {
  }

}
