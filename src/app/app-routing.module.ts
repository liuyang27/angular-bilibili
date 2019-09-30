import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { TodolistComponent } from './components/todolist/todolist.component';
import { NewsComponent } from './components/news/news.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductComponent } from './components/product/product.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';

const routes: Routes = [

{path:'news',component:NewsComponent},
{path:"search",component:SearchComponent},
{path:"todolist",component:TodolistComponent},
//{path:'newscontent',component:NewscontentComponent},
{path:"product",component:ProductComponent},
{path:"productcontent/:pid",component:ProductcontentComponent},
{path:'newscontent/:aid',component:NewscontentComponent},
{path:'**',redirectTo:'news',pathMatch:'full'},

//module lazy load
{path:'productmodule',loadChildren:'./modules/product/product.module#ProductModule'},
{path:'articlemodule',loadChildren:'./modules/article/article.module#ArticleModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
