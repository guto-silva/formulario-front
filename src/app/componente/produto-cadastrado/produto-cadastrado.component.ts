import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-cadastrado',
  templateUrl: './produto-cadastrado.component.html',
  styleUrls: ['./produto-cadastrado.component.css']
})
export class ProdutoCadastradoComponent implements OnInit {

  filme: Produto[] = [];

  constructor(private router: Router, private produtoService: ProdutoService) {
   
  }

  ngOnInit(): void {
    this.produtoService.recuperarFilmes().subscribe(
      (res: Produto[]) => {console.log(this.filme = res)}
    );

  }

  excluir(id: any){
    this.produtoService.excluirFilmePorId(id).subscribe();
    alert("Filme excluído com sucesso!");
    this.reload();
  }

  reload(){
    window.location.reload();
  }

}
