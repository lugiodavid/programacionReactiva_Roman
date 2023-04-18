import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './lista-alumnos.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AbmAlumnosModule } from '../abm-alumnos/abm-alumnos.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ListaAlumnosComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule,
    MatIconModule,
    MatButtonModule,
    AbmAlumnosModule,
    MatDialogModule,
  ],
  exports: [ListaAlumnosComponent],
})
export class ListaAlumnosModule {}
