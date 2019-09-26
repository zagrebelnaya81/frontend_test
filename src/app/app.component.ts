import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import {GalleryService} from "./core/services/gallery.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tpredic-Gallery-Test';
  searchInputValue = 'test';
  private carousel = [];
  private eventsSubscription: any;

  private eventsSubject = new Subject<any>();
  constructor(private galleryService: GalleryService){
    this.loadImageCarousel('flower', 1);
  }

  loadImageCarousel(searchValue, page) {
    this.galleryService.getCalendarData(searchValue, page,5).subscribe(res => {
      this.carousel=res.photos.photo;
      console.log(this.carousel);
    });
  }


  emitEventToChild(value: string) {
    this.searchInputValue = value;
    this.eventsSubject.next(this.searchInputValue);
  }
}
