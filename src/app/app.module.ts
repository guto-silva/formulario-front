import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoComponent } from './componente/produto/produto.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { ProdutoCadastradoComponent } from './componente/produto-cadastrado/produto-cadastrado.component';
import { CorpoComponent } from './componente/corpo/corpo.component';
import { LoginComponent } from './componente/login/login.component';
import { ProdutoPorCategoriaComponent } from './componente/produto-por-categoria/produto-por-categoria.component';
import { ProdutoDetalheComponent } from './componente/produto-detalhe/produto-detalhe.component';
import { CarrinhoComponent } from './componente/carrinho/carrinho.component';



@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    CabecalhoComponent,
    ProdutoCadastradoComponent,
    CorpoComponent,
    LoginComponent,
    ProdutoPorCategoriaComponent,
    ProdutoDetalheComponent,
    CarrinhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
