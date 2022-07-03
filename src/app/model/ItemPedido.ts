import { Produto } from "./produto"

export class ItemPedido{
    public quantidadePedido: number | undefined
    public valorUnitario: number | undefined
    public valorTotal: number | undefined
    public produto: Produto | undefined

    construct(quantidadePedido?: number, valorUnitario?: number, valorTotal?: number, produto?: Produto){
        this.quantidadePedido = quantidadePedido = 0
        this.valorUnitario = valorUnitario = 0
        this.valorTotal = valorTotal = 0
        this.produto = produto = new Produto()
    }
}