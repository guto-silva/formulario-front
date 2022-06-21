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
      console.log(this.filme);

      this.produtoService.cadastrarFilme(this.filme).subscribe(
        (resposta: Produto) => {alert("Filme cadastrado com sucesso")}
      );
  }

}
