import { Pipe, PipeTransform } from '@angular/core';
import { Alumno } from 'src/app/alumnos/lista-alumnos/lista-alumnos.component';

@Pipe({
  name: 'nombreCompleto',
})
export class NombreCompletoPipe implements PipeTransform {
  transform(value: Alumno, ...args: unknown[]): unknown {
    return `${value.nombre} ${value.apellido}`;
  }
}
