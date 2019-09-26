import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GalleryService } from 'src/app/core/services/gallery.service';
import { ModalService } from '../_modal';

// const getImagesUrl = `services/rest/?method=flickr.photos.search&api_key=522c1f9009ca3609bcbaf08545f067ad&tags=${tag}&page=${page}&tag_mode=any&per_page=100&format=json&safe_search=1&nojsoncallback=1`;
// const baseUrl = 'https://api.flickr.com/';

@Component({
    selector: 'gallery',
    templateUrl: 'gallery.component.html',
    styleUrls: ['gallery.component.scss']
})
export class GalleryComponent {
    @Input() events: Observable<void>;
    private eventsSubscription: any;
    private gallery = [];


    constructor(private httpClient: HttpClient, private galleryService: GalleryService, private modalService: ModalService){

    }


    ngOnInit() {
        window.addEventListener('scroll', this.scroll);
        this.loadImageGallery('flower', 1);
        this.eventsSubscription = this.events.subscribe((searchValue) => this.loadImageGallery(searchValue, 1));
    }

    openModal(id: string) {
      // console.log(id);
      this.modalService.open(id);
    }

    closeModal(id: string) {
      // console.log(id);
      this.modalService.close(id);
    }
    loadImageGallery(searchValue, page, num=100) {
        this.galleryService.getCalendarData(searchValue, page, num).subscribe(res => {
            this.gallery=res.photos.photo;
            console.log(this.gallery);
        });
    }


  scroll=():void  =>{
    let contentHeight = 800;
    const pageHeight = document.documentElement.clientHeight;
    let scrollPosition;
    let n = 100;
    if(navigator.appName == "Microsoft Internet Explorer") {
      scrollPosition = document.documentElement.scrollTop;
    } else {
      scrollPosition = window.pageYOffset;
    }
    if((contentHeight - pageHeight - scrollPosition) < 500){
      n += 10;
     this.loadImageGallery('flower', 1, n);
      contentHeight += 800;
    }
  }


  ngOnDestroy() {
        this.eventsSubscription.unsubscribe()
    }

}
