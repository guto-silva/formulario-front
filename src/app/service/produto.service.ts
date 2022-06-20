import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public cadastrarFilme(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://retroflix.herokuapp.com/produtos', produto);
  }
}
