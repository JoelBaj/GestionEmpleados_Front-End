import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EstadosService {
  private API_SERVE = "http://localhost:8080/estados/";
  constructor(private httpClient: HttpClient) { }

  // public getAllEstadosByPais(idPais: BigInteger): Observable<any> {
  //   return this.httpClient.get(this.API_SERVE + idPais);
  // }
  //public getAllEstadosByPais(idPais: BigInteger): Observable<any> {
  //  return this.httpClient.get(this.API_SERVE + idPais);
  //}
  public getAllEstadosByPais(idPais: any): Observable<any> {
    return this.httpClient.get(this.API_SERVE + idPais);
  }
}
