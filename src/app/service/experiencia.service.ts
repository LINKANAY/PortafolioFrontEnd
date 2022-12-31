import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  expURL = 'http://localhost:8080/expLab';

  constructor(private http: HttpClient) { }

  public lista(): Observable<Experiencia[]>{
    return  this.http.get<Experiencia[]>(this.expURL + 'traer');
  }

  public verExp(id: number): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(this.expURL + 'traer/${id}');
  }

  public save(experiencia: Experiencia): Observable<any>{
    return this.http.post<Experiencia>(this.expURL + 'crear', experiencia);
  }

  public editar(experiencia: Experiencia): Observable<any>{
    return this.http.post<Experiencia>(this.expURL + 'editar/${id}', experiencia);
  }

  public delete(id: number): Observable<any>{
    return this.http.delete<Experiencia>(this.expURL +  'eliminar/${id}');
  }
}
