import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-por-categoria',
  templateUrl: './produto-por-categoria.component.html',
  styleUrls: ['./produto-por-categoria.component.css']
})
export class ProdutoPorCategoriaComponent implements OnInit {

  filme: Produto[] = []
  categoria: string = ""
  constructor(private router: Router, private produtoService: ProdutoService) { }

  ngOnInit(): void {
  }
  
  pesquisar(){
    this.produtoService.recuperarFilmesPorCategoria(this.categoria).subscribe(
      {
        next: (resposta: Produto[]) => this.filme = resposta,
        error: (e) => alert('Erro ao recuperar produto por categoria' + e)
      });
  }

}
