import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [{
  path:'',
  redirectTo:'/shopping-list',
  pathMatch:"full"
},{
  path:'shopping-list',
  component:ShoppingListComponent
},{
  path:"**",
  component:ShoppingListComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
