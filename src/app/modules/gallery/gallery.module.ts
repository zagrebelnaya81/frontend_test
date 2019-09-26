// Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import {ModalModule } from '../_modal/modal.module';
import { FormsModule } from '@angular/forms';


import {ImageModule} from '../image/image.module';

// This Module's Components
import { GalleryComponent } from './gallery.component';
@NgModule({
    imports: [
        CommonModule,
        ModalModule,
        FormsModule,
        ImageModule
    ],
    declarations: [
        GalleryComponent,
    ],
    exports: [
        GalleryComponent,
    ]
})
export class GalleryModule {

}
