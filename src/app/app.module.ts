import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { LoginComponent } from './componentes/modals/login/login.component';
import { RedesComponent } from './componentes/redes/redes.component';
import { SoyComponent } from './componentes/soy/soy.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AcercadeComponent } from './componentes/acercade/acercade.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { ErrorComponent } from './componentes/error/error.component';
import { IntroComponent } from './componentes/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    SoyComponent,
    EducacionComponent,
    AcercadeComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    DashboardComponent,
    ErrorComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
