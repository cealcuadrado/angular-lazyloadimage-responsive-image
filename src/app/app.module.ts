import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LazyLoadImageModule } from 'ng-lazyload-image';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
