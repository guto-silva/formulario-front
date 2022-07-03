import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/model/Pedido';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {

  pedido: Pedido = new Pedido()
  vazio: boolean = true
  constructor() {
    this.pedido = JSON.parse(localStorage.getItem("RetroflixCarrinho")!)
    if(this.pedido){
      this.vazio = false
    }
   }

  ngOnInit(): void {
  }

}
