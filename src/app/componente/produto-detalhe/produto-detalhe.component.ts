import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ItemPedido } from 'src/app/model/ItemPedido';
import { Pedido } from 'src/app/model/Pedido';
import { Produto } from 'src/app/model/produto';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-produto-detalhe',
  templateUrl: './produto-detalhe.component.html',
  styleUrls: ['./produto-detalhe.component.css']
})
export class ProdutoDetalheComponent implements OnInit {
  filme: Produto = new Produto();
  quantidadePedido: number = 1
  
  constructor(private produtoService: ProdutoService, private route: ActivatedRoute, private nav: Router) {

   }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: parameter => this.recuperarFilme(parameter["id"])
    });
  }

  recuperarFilme(id: string){
    this.produtoService.recuperarFilmesPorId(id).subscribe({
      next: (produto: Produto) => this.filme = produto
    });
  }

  adicionarCarrinho(){
    let pedido: Pedido
    pedido = JSON.parse(localStorage.getItem("RetroflixCarrinho")!);
    if(!pedido){
      pedido = new Pedido()
      pedido.valorTotal = 0
      pedido.itensPedido = []
    }

    let item: ItemPedido
    item = new ItemPedido()
    item.quantidadePedido = this.quantidadePedido
    item.produto = this.filme
    item.valorUnitario = this.filme.valorVenda
    item.valorTotal = item.valorUnitario! * item.quantidadePedido
    pedido.itensPedido?.push(item)
    pedido.valorTotal = pedido.valorTotal! + item.valorTotal
    localStorage.setItem("RetroflixCarrinho", JSON.stringify(pedido))
    this.nav.navigate(['carrinho'])
  }
}

