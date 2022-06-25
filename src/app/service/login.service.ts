import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/usuario';

const apiUrl: string = 'https://retroflix.herokuapp.com/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public logarUsuario(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(apiUrl, user);
  }
  

}
