import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JWTToken } from 'src/app/model/jwttoken';
import { Usuario } from 'src/app/model/usuario';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;

  constructor(private router: Router, private loginService: LoginService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  autenticar(){
  
  }

}
