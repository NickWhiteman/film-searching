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
  filmInfo: FilmType[] = [];

  constructor(private _filmService: ConfigService) { };

  getFilms(): void {
    this._filmService.getSearchByFilmName(encodeURI(this.inputValue))
      .subscribe((films) => {
        console.log(films)
        this.filmInfo = films;
      });
    console.log(this.inputValue);
  };
};
