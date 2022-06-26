import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpoComponent } from './componente/corpo/corpo.component';
import { ProdutoCadastradoComponent } from './componente/produto-cadastrado/produto-cadastrado.component';
import { ProdutoPorCategoriaComponent } from './componente/produto-por-categoria/produto-por-categoria.component';
import { ProdutoComponent } from './componente/produto/produto.component';



const routes: Routes = [
  {path: '', component: ProdutoPorCategoriaComponent},
  {path: 'corpo', component: CorpoComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'produto-cadastrado', component: ProdutoCadastradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
