/**
 * Created by dmitricercel on 15.11.16.
 */
import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'cg-speakers',
    templateUrl: '/templates/congregation/speakers/speakers.html',
    providers: [ Title ]
})
export class SpeakersComponent {

    constructor(title: Title) {
        title.setTitle('Congregation App. Speaker details');
    }

}