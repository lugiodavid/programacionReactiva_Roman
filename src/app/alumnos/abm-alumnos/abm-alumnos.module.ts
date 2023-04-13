import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbmAlumnosComponent } from './abm-alumnos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorHelperModule } from 'src/app/shared/components/form-error-helper/form-error-helper.module';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [AbmAlumnosComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormErrorHelperModule,
    MatSidenavModule,
  ],
  exports: [AbmAlumnosComponent],
})
export class AbmAlumnosModule {}
