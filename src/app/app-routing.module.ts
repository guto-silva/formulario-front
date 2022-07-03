import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './componente/carrinho/carrinho.component';
import { CorpoComponent } from './componente/corpo/corpo.component';
import { ProdutoCadastradoComponent } from './componente/produto-cadastrado/produto-cadastrado.component';
import { ProdutoDetalheComponent } from './componente/produto-detalhe/produto-detalhe.component';
import { ProdutoPorCategoriaComponent } from './componente/produto-por-categoria/produto-por-categoria.component';
import { ProdutoComponent } from './componente/produto/produto.component';



const routes: Routes = [
  {path: '', component: ProdutoPorCategoriaComponent},
  {path: 'corpo', component: CorpoComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'produto-cadastrado', component: ProdutoCadastradoComponent},
  {path: 'produto-detalhe/:id', component: ProdutoDetalheComponent},
  {path: 'carrinho', component: CarrinhoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
