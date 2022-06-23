import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-cadastrado',
  templateUrl: './produto-cadastrado.component.html',
  styleUrls: ['./produto-cadastrado.component.css']
})
export class ProdutoCadastradoComponent implements OnInit {

  filme: Produto[] = []

  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtoService.recuperarFilmes().subscribe(
      (res: Produto[]) => {this.filme = res}
    );
  }

  excluir(id: any){
    this.produtoService.excluirFilmePorId(id).subscribe();
  }

}
