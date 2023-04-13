import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface Alumno {
  id: number;
  nombre: string;
  apellido: string;
  email: string;
  curso: string;
}

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent {
  alumnos: Alumno[] = [
    {
      id: 1,
      nombre: 'Guillermo',
      apellido: 'Valarezo',
      email: 'gv@mail.com',
      curso: 'Node',
    },
    {
      id: 2,
      nombre: 'Leo',
      apellido: 'Messi',
      email: 'lm@mail.com',
      curso: 'Python',
    },
    {
      id: 3,
      nombre: 'Fideo',
      apellido: 'Di Maria',
      email: 'fd@mail.com',
      curso: 'Java',
    },
  ];

  displayedColumns: string[] = ['id', 'nombreCompleto', 'email', 'curso'];

  dataSource = new MatTableDataSource(this.alumnos);

  aplicarFiltros(ev: Event): void {
    const inputValue = (ev.target as HTMLInputElement)?.value;
    // inputValue = inputValue.trim(); // Remove whitespace
    // inputValue = inputValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = inputValue?.trim()?.toLocaleLowerCase();
    console.log(ev);
  }
}
