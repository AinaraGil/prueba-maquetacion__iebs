import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/main/hero/hero.component';
import { CardOpinionComponent } from './components/main/opiniones/card-opinion/card-opinion.component';
import { CardDescuentoComponent } from './components/main/becas/card-descuento/card-descuento.component';
import { FormularioContactoComponent } from './components/main/hero/formulario-contacto/formulario-contacto.component';
import { InfoMasterSeoSemComponent } from './components/main/hero/info-master-seo-sem/info-master-seo-sem.component';
import { OtrosProgramasComponent } from './components/main/otros-programas/otros-programas.component';
import { InfoMasterComponent } from './components/main/info-master/info-master.component';
import { OpinionesComponent } from './components/main/opiniones/opiniones.component';
import { BecasComponent } from './components/main/becas/becas.component';
import { InformacionComponent } from './components/main/informacion/informacion.component';
import { ReconocimientosComponent } from './components/main/reconocimientos/reconocimientos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    HeroComponent,
    CardOpinionComponent,
    CardDescuentoComponent,
    FormularioContactoComponent,
    InfoMasterSeoSemComponent,
    OtrosProgramasComponent,
    InfoMasterComponent,
    OpinionesComponent,
    BecasComponent,
    InformacionComponent,
    ReconocimientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
