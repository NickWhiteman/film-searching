import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { FilmType } from "../search/search.component";

abstract class IService {
  static getSearchByFilmName: (filmName: string) => Observable<FilmType> | undefined
}

@Injectable({
  providedIn: 'root'
})
export class ConfigService implements IService {
  private baseUrl: string = 'https://kinopoiskapiunofficial.tech'
  constructor(private http: HttpClient) {
  }

  static getSearchByFilmName(filmName: string) {
    this.http.get(`${this.baseUrl}/${filmName}`)
      .subscribe((response: FilmType) => {return response})
  }
} 