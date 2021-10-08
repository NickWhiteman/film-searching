import { Component, OnInit } from '@angular/core';

type FilmType = {

}

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputValue: string = '';
  baseUrl: string = 'http://kinopoisk.ru';

  onSearching(): Promise<FilmType> {
    return fetch(`${baseUrl}/`).then
  }
}
