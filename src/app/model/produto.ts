export class Produto {
                  id;
    /* private */ titulo;
    /* private */ subtitulo;
    /* private */ enderecoImagem;
    /* private */ dataLancamento;
    /* private */ sinopse;
    /* private */ trailer;

    constructor(id?: string, titulo?: string, subtitulo?: string, enderecoImagem?: string, dataLancamento?: string, sinopse?: string, trailer?: string){
        this.id = id;
        this.titulo = titulo;
        this.subtitulo = subtitulo;
        this.enderecoImagem = enderecoImagem;
        this.dataLancamento = dataLancamento;
        this.sinopse = sinopse;
        this.trailer = trailer;
    }

   /*  public get titulo():string{
        return this._titulo;
    }

    public set titulo(titulo: string){
        this._titulo = titulo;
    }

    public get subtitulo():string{
        return this._subtitulo;
    }

    public set subtitulo(subtitulo: string){
        this._subtitulo = subtitulo;
    }

    public get enderecoImagem():string{
        return this._enderecoImagem;
    }

    public set enderecoImagem(enderecoImagem: string){
        this._enderecoImagem = enderecoImagem;
    }

    public get dataLancamento():string{
        return this._dataLancamento;
    }

    public set dataLancamento(dataLancamento: string){
        this._dataLancamento = dataLancamento;
    }

    public get sinopse():string{
        return this._sinopse;
    }

    public set sinopse(sinopse: string){
        this._sinopse = sinopse;
    }

    public get trailer():string{
        return this._trailer;
    }

    public set trailer(trailer: string){
        this._trailer = trailer;
    } */
}
