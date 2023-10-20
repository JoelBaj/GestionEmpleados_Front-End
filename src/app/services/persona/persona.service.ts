import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private API_SERVE = "http://localhost:8080/personas/";
  constructor(private httpClient: HttpClient) { }

  public getAllPersonas(): Observable<any> {
    return this.httpClient.get(this.API_SERVE)
  }

  public savePersona(persona: any): Observable<any> {
    return this.httpClient.post(this.API_SERVE, persona);

  }

}
