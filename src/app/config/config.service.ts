import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FilmType } from "../types";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _baseUrl: string = 'https://kinopoiskapiunofficial.tech';
  private _options = {
    headers: { 'X-API-KEY': 'aeb1b757-89d7-4ea0-9d54-034501efb852' },
  };

  constructor(private http: HttpClient) {
  };

  getSearchByFilmName(filmName: string): Observable<FilmType[]> {
    return this.http.get<FilmType[]>(`${this._baseUrl}/api/v2.1/films/search-by-keyword?keyword=${filmName}`, this._options);
  };
} 