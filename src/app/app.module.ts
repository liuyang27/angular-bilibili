import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';

import { FormsModule } from'@angular/forms';
import { TodolistComponent } from './components/todolist/todolist.component';

import { StorageService } from './services/storage.service';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { TransitionComponent } from './components/transition/transition.component';

import { HttpClientModule } from '@angular/common/http';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ProductComponent } from './components/product/product.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';

import { UserModule } from './modules/user/user.module';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    TodolistComponent,
    NewsComponent,
    HeaderComponent,
    TransitionComponent,
    NewscontentComponent,
    ProductComponent,
    ProductcontentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    UserModule
  ],
  providers: [StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
