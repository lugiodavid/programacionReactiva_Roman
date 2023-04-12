import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { PageWrapperComponent } from './layout/page-wrapper/page-wrapper.component';
import { ListaAlumnosComponent } from './alumnos/lista-alumnos/lista-alumnos.component';
import { AbmAlumnosModule } from './alumnos/abm-alumnos/abm-alumnos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    ToolbarComponent,
    PageWrapperComponent,
    ListaAlumnosComponent,
  ],
  imports: [BrowserModule, AbmAlumnosModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
