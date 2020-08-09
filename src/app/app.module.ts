import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { ListManagerComponent } from './list-manager/list-manager.component';

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpClientModule,
  ],
  declarations: [ 
    AppComponent,
    TodoItemComponent, 
    InputButtonUnitComponent, 
    ListManagerComponent,
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { 

}
