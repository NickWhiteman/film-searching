import { Component } from '@angular/core';
import { ConfigService } from '../config/Config.service';
import { baseUrl } from './searchHelpers/const';

export type FilmType = {
  keyword: string;
  pagesCount: number;
  films: [
    {
      filmId: number;
      nameRu: string;
      nameEn: string;
      type: string;
      year: string;
      description: string;
      filmLength: string;
      countries: [
        {
          country: string;
        }
      ];
      genres: [
        {
          genre: string;
        }
      ];
      rating: number;
      ratingVoteCount: number;
      posterUrl: string;
      posterUrlPreview: string;
    }
  ];
};

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  inputValue: string = '';
  filmInfo: FilmType | null = null;

  onSearching(inputValue: string): void {
    const searchValue = encodeURI(inputValue);
    this.filmInfo = ConfigService.getSearchByFilmName(searchValue);
  }
}
