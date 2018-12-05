import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SearchModule } from 'projects/search/src/public_api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OmniSearchComponent } from './omni-search/omni-search.component';

@NgModule({
  declarations: [
    AppComponent,
    OmniSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
