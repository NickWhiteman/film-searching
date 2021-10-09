import { Component } from '@angular/core';
import { ConfigService } from './config/config.service';
import { FilmType } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputValue: string = '';
  filmInfo: FilmType[] | null = null;

  constructor(private _filmService: ConfigService) { };

  getFilms() {
    this._filmService.getSearchByFilmName(encodeURI(this.inputValue)).subscribe(film => console.log(film));
    console.log(this.inputValue);
  };
};
