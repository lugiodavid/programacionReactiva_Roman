import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmAlumnosComponent } from './abm-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorHelperModule } from 'src/app/shared/components/form-error-helper/form-error-helper.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [AbmAlumnosComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormErrorHelperModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  exports: [AbmAlumnosComponent],
})
export class AbmAlumnosModule {}
