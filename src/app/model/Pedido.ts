import { ItemPedido } from "./ItemPedido";

export class Pedido{
    itensPedido
    valorTotal

    constructor(itensPedido?: ItemPedido[], valorTotal?: number){
        this.itensPedido = itensPedido
        this.valorTotal = valorTotal
    }
}