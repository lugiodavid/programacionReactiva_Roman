import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsAndInconsComponent } from './buttons-and-incons.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [ButtonsAndInconsComponent],
  imports: [CommonModule, MatIconModule],
  exports: [ButtonsAndInconsComponent],
})
export class ButtonsAndInconsModule {}
