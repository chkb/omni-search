import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material.module';
import { SearchComponent } from './search.component';

@NgModule({
  declarations: [SearchComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
