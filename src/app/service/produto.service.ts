import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../model/produto';

const apiUrl: string = 'http://localhost:8080/produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }

  public recuperarFilmes(): Observable<Produto[]>{
    return this.http.get<Produto[]>(apiUrl);
  }

  public recuperarFilmesPorCategoria(categoria: string): Observable<Produto[]>{
    return this.http.get<Produto[]>(`${apiUrl}/${categoria}`);
  }

  public cadastrarFilme(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(apiUrl, produto);
  }

  public excluirFilmePorId(id: any): Observable<any>{
    return this.http.delete<any>(`${apiUrl}/${id}`);
  }
}
