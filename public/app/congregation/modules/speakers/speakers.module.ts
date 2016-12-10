import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import {FormsModule, ReactiveFormsModule}    from '@angular/forms';

import {SpeakersComponent} from "./speakers.component";
import {SpeakerComponent} from "./speaker.component";
import {SpeakersRoutesModule} from "./speakers.routes";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SpeakersRoutesModule
    ],
    declarations: [
        SpeakersComponent,
        SpeakerComponent
    ]
})
export class SpeakersModule {}