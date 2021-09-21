import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from '../models/alumno.model';

const baseURL = "http://localhost:8090/rest/alumno"

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  constructor(private http:HttpClient) { }

  create(data: Alumno): Observable<any>{
    return this.http.post(baseURL, data );
  }
}
