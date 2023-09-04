import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppHighlightDirective } from './app-highlight.directive';
import { TimerComponent } from './timer/timer.component';
import { AccordionComponent } from './accordion/accordion.component';
import { Counter7Component } from './counter7/counter7.component';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    TodoListComponent,
    UserListComponent,
    AppHighlightDirective,
    TimerComponent,
    AccordionComponent,
    Counter7Component
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
