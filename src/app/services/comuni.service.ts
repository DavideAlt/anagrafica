import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Regione } from '../model/regione';
import { IRegione } from '../interfaces/regione.interface';
import { IProvincia } from '../interfaces/provincia.interface';
import { Provincia } from '../model/provincia';
import { Comune } from '../model/comune';

@Injectable({
  providedIn: 'root'
})
export class ComuniService {
  
  private _apiUrl = 'https://axqvoqvbfjpaamphztgd.functions.supabase.co';

  constructor(private _http: HttpClient) { 
    console.log('creato ComuniService');
  }

  getRegioni(): Observable<IRegione[]> {
    return this._http.get<Regione[]>(`${this._apiUrl}/regioni`);
  }

  getProvince(regione?: string): Observable<Provincia[]> {
    if (regione) {
      return this._http.get<IProvincia[]>(`${this._apiUrl}/province/${regione}`);
    }
    return this._http.get<IProvincia[]>(`${this._apiUrl}/province`);
  }

  getComuni(provinciaRegione?: string): Observable<Comune[]> {
    if (provinciaRegione) {
      return this._http.get<Comune[]>(`${this._apiUrl}/comuni/${provinciaRegione}`);
    }
    return this._http.get<Comune[]>(`${this._apiUrl}/comuni`);
  }
}
