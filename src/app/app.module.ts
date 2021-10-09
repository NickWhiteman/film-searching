import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { ConfigService } from './config/Config.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HttpClientModule,
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
