import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SpeechesComponent} from "./speeches.component";

const routes: Routes = [
    { path: 'speeches',  component: SpeechesComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class SpeechesRoutesModule { }