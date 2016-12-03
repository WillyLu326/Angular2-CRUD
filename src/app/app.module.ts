import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { router } from "./router";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddComponent } from './add/add.component';
import { ShowComponent } from './show/show.component';
import { UpdateComponent } from './update/update.component';
import { ErrorComponent } from './error/error.component';

import { HttpService } from "./services/httpService";
import { EmpService } from "./services/empService";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    ShowComponent,
    UpdateComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    router
  ],
  providers: [
    HttpService,
    EmpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
