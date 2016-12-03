/**
 * Created by zhenglu on 12/3/16.
 */

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AddComponent } from './add/add.component';
import { ShowComponent } from "./show/show.component";
import { ErrorComponent } from "./error/error.component";
import { UpdateComponent } from "./update/update.component";

const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddComponent },
  { path: 'show', component: ShowComponent },
  { path: 'update', component: UpdateComponent },
  { path: '**', component: ErrorComponent }
];

export const router: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
