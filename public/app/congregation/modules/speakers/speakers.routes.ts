import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpeakerComponent} from "./speaker.component";
import {SpeakersComponent} from "./speakers.component";

const routes: Routes = [
    { path: 'speakers',  component: SpeakersComponent },
    { path: 'speakers/:id',  component: SpeakerComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SpeakersRoutesModule { }