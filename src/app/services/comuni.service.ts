import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Regione } from '../model/regione';
import { IProvincia } from '../interfaces/provincia.interface';
import { Provincia } from '../model/provincia';
import { Comune } from '../model/comune';
import { IComune } from '../interfaces/comune.interface';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {
  
  private _apiUrl = 'https://axqvoqvbfjpaamphztgd.functions.supabase.co';

  constructor(private _http: HttpClient) { }

  getRegioni(): Observable<Regione[]> {
    return this._http.get<string[]>(`${this._apiUrl}/regioni`).pipe(
      map(iregioni => Regione.mapToRegioni(iregioni))
    );
  }

  getProvince(regione?: string): Observable<Provincia[]> {
    if (regione) {
      return this._http.get<IProvincia[]>(`${this._apiUrl}/province/${regione}`).pipe(
        map(iprovince => Provincia.mapToProvince(iprovince))
      );
    }
    return this._http.get<IProvincia[]>(`${this._apiUrl}/province`).pipe(
      map(iprovince => Provincia.mapToProvince(iprovince))
    );
  }

  getComuni(provinciaRegione?: string): Observable<Comune[]> {
    if (provinciaRegione) {
      return this._http.get<IComune[]>(`${this._apiUrl}/comuni/provincia/${provinciaRegione}`).pipe(
        map(icomuni => Comune.mapToComuni(icomuni))
      );
    }
    return this._http.get<IComune[]>(`${this._apiUrl}/comuni`).pipe(
      map(icomuni => Comune.mapToComuni(icomuni))
    );
  }
}
