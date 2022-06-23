import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorpoComponent } from './componente/corpo/corpo.component';
import { ProdutoCadastradoComponent } from './componente/produto-cadastrado/produto-cadastrado.component';
import { ProdutoComponent } from './componente/produto/produto.component';



const routes: Routes = [
  {path: '', component: CorpoComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'produto-cadastrado', component: ProdutoCadastradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
