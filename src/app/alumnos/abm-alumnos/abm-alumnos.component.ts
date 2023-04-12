import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-abm-alumnos',
  templateUrl: './abm-alumnos.component.html',
  styleUrls: ['./abm-alumnos.component.css'],
})
export class AbmAlumnosComponent {
  alumnos: any[] = [];

  nombreControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(10),
  ]);
  apellidoControl = new FormControl('', [Validators.required]);
  emailControl = new FormControl('', [Validators.email, Validators.required]);
  cursoControl = new FormControl('', [
    Validators.required,
    this.noEscogerValidator(),
  ]);
  passwordControl = new FormControl('', [Validators.required]);
  repasswordControl = new FormControl('', [Validators.required]);
  direccionControl = new FormControl('', [Validators.required]);
  direccion2Control = new FormControl();
  ciudadControl = new FormControl('', [Validators.required]);
  provinciaControl = new FormControl('', [
    Validators.required,
    this.noEscogerValidator(),
  ]);
  zipControl = new FormControl();
  vipControl = new FormControl(false);

  registerForm: FormGroup;

  constructor(public formBuilder: FormBuilder) {
    this.registerForm = this.formBuilder.group({
      nombre: this.nombreControl,
      apellido: this.apellidoControl,
      email: this.emailControl,
      curso: this.cursoControl,
      password: this.passwordControl,
      direccion: this.direccionControl,
      direccion2: this.direccion2Control,
      ciudad: this.ciudadControl,
      provincia: this.provinciaControl,
      zip: this.zipControl,
      vip: this.vipControl,
    });
  }
  onSubmit(): void {
    if (this.registerForm.valid) {
      this.alumnos.push(this.registerForm.value);
      this.registerForm.reset();
    } else {
      this.registerForm.markAllAsTouched();
    }
  }

  noEscogerValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value?.toLowerCase().includes('Escoger...')) {
        return {
          noEscoger: true,
        };
      }
      return null;
    };
  }
}
