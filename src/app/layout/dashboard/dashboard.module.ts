import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AbmAlumnosModule } from 'src/app/alumnos/abm-alumnos/abm-alumnos.module';
import { CardsModule } from '../pages/cards/cards.module';
import { ButtonsAndInconsModule } from '../pages/buttons-and-incons/buttons-and-incons.module';
import { ListaAlumnosModule } from 'src/app/alumnos/lista-alumnos/lista-alumnos.module';
import { DirectivesModule } from 'src/app/shared/directives/directives.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AbmAlumnosModule,
    CardsModule,
    ButtonsAndInconsModule,
    ListaAlumnosModule,
    DirectivesModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
