import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ErrorComponent } from './componentes/error/error.component';
import { IntroComponent } from './componentes/intro/intro.component';


const routes: Routes = [
{path:'dashboard',component:DashboardComponent},
{path:'intro',component:IntroComponent},
{path: '', redirectTo: '/intro' ,pathMatch:'full'},
{path:'**', component:ErrorComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
