import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {CreateTaskComponent} from "./createTask/createTask.component";
import {UpdateTaskComponent} from "./update-task/update.component";
import {ReadTaskComponent} from "./readTask/readTask.component";
import {RouterModule} from "@angular/router";
import {routes} from "./app.routes";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {AppSingleton} from "./app.singletonService";
import {} from "@angular/http";
import {HttpModule} from "@angular/http";

@NgModule({
  imports:      [ BrowserModule ,FormsModule, CommonModule, RouterModule.forRoot(routes), ReactiveFormsModule, HttpModule],
  declarations: [ AppComponent, CreateTaskComponent, UpdateTaskComponent, ReadTaskComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [AppSingleton]
})
export class AppModule { }
