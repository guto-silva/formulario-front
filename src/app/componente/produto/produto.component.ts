import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
 
  public filme: Produto = new Produto();
  
  

  constructor(private produtoService: ProdutoService) {

  }

  ngOnInit(): void {
  }

  cadastrarFilme(){
     /*  this.filme.titulo = "Angular";
      this.filme.subtitulo = "Um desafio";
      this.filme.enderecoImagem = "http://angular.com.br/angular.png";
      this.filme.dataLancamento = "2022";
      this.filme.sinopse = "Quebrando a cabeça para conseguir fazer uma requisição POST corretamente no Angular.";
      this.filme.trailer = "http://youtubeeee.com/angular"; */

      console.log(this.filme);

      this.produtoService.cadastrarFilme(this.filme).subscribe(
        (resposta: Produto) => {alert("Filme cadastrado com sucesso")}
      );
  }

}
