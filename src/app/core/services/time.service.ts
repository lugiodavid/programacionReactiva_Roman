import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export interface Tiempo {
  horas: number;
  minutos: number;
  segundos: number;
}

@Injectable({
  providedIn: 'root',
})
export class TimeService {
  private _reloj$ = new BehaviorSubject<Tiempo>(this.tiempoActual);
  constructor() {
    setInterval(() => {
      this._reloj$.next(this.tiempoActual);
    }, 1000);
  }

  get reloj(): Observable<string> {
    return this._reloj$.asObservable().pipe(
      map((tiempo) => {
        return `${tiempo.horas}:${tiempo.minutos}`;
      })
    );
  }
  get tiempoActual(): Tiempo {
    const ahora = new Date();
    return {
      horas: ahora.getHours(),
      minutos: ahora.getMinutes(),
      segundos: ahora.getSeconds(),
    };
  }
}
