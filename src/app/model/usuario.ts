export class Usuario{
    public username
    public senha

    constructor(username?: string, senha?: string){
        this.username = username;
        this.senha = senha;
    }
}