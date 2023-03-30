import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Moment } from '../Moments';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MomentService {
  private baseUrl = environment.baseApiUrl 
  private apiUrl = `${this.baseUrl}api/moments`

  constructor(private http: HttpClient) { }

  createMoment(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.apiUrl, formData)
   }
}
