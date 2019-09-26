
import { NgModule } from '@angular/core';
import {GalleryModule} from './modules/gallery/gallery.module';
import { BrowserModule } from '@angular/platform-browser';
import {ModalModule } from './modules/_modal/modal.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CarouselModule } from 'angular-bootstrap-md'


import {ImageModule} from './modules/image/image.module';

import {CoreModule} from './core/core.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GalleryModule,
    MDBBootstrapModule,
    CarouselModule,
    ImageModule,
    ModalModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
