import { Dimensoes } from "./dimensoes";


export class Produto {
    public id;
    public titulo;
    public subtitulo;
    public enderecoImagem;
    public dataLancamento;
    public categoria;
    public duracao;
    public sinopse;
    public trailer;
    public fornecedor;
    public cnpj;
    public custo;
    public valorVenda;
    public quantidade;
    public direcao;
    public elenco;
    public dimensoes;

    constructor(id?: string, titulo?: string, subtitulo?: string, enderecoImagem?: string, dataLancamento?: string, categoria?: string, duracao?: string, sinopse?: string, trailer?: string, fornecedor?: string, cnpj?: string, custo?: number, valorVenda?: number, quantidade?: number, direcao?: string, elenco?: string, dimensoes?: Dimensoes){
        this.id = id;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.enderecoImagem = enderecoImagem;
        this.dataLancamento = dataLancamento;
        this.categoria = categoria;
        this.duracao = duracao;
        this.sinopse = sinopse;
        this.trailer = trailer;
        this.fornecedor = fornecedor;
        this.cnpj = cnpj;
        this.custo = custo;
        this.valorVenda = valorVenda;
        this.quantidade = quantidade;
        this.direcao = direcao;
        this.elenco = elenco;
        this.dimensoes = dimensoes;
    }
}
