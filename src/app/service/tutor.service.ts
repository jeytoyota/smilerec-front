import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
import { Tutor } from '../model/Tutor';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  constructor(
    private http: HttpClient
  ) { }

   getAllTutores(): Observable<Tutor[]>{
    return this.http.get<Tutor[]>(`${environment.uri}/tutor`)
  }

  getTutor(id: number): Observable<Tutor>{
    return this.http.get<Tutor>(`${environment.uri}/tutor/${id}`)
  }

  putTutor(tutor: Tutor): Observable<Tutor>{
    return this.http.put<Tutor>(`${environment.uri}/tutor`, tutor)
  }

  postTutor(tutor: Tutor){
    return this.http.post<Tutor>(`${environment.uri}/tutor`, tutor)
  }

  deleteTutor(id:number): Observable<Tutor>{
    return this.http.delete<Tutor>(`${environment.uri}/tutor/${id}`)
  }


}
