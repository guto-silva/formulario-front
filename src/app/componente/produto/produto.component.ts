import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
 
  public filme: Produto = new Produto();
  
  

  constructor(private produtoService: ProdutoService, private router: Router) {
    
  }

  ngOnInit(): void {
  }

  navegar(){
    this.router.navigate(["/produtos-cadastrados"]);
  }

  cadastrarFilme(){
      console.log(this.filme);

      this.produtoService.cadastrarFilme(this.filme).subscribe(
        (resposta: Produto) => {alert("Filme cadastrado com sucesso")}
      );
  }

  excluirPorId(){
    this.produtoService.excluirFilmePorId(this.filme.id).subscribe(
      (resposta: any) => {alert("Filme excluído com sucesso")} 
    );
  }

}
