import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodoListComponent } from './shared/component/Todo list/todolist.component';
import { TodoFormComponent } from './shared/component/Todo form/todoform.component';
import { StdTableComponent } from './shared/component/std table/stdtable.component';
import { StdFormComponent } from './shared/component/std form/stdform.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoFormComponent,
    StdTableComponent,
    StdFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
