/**
 * Created by dmitricercel on 15.11.16.
 */
import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'cg-speaker',
    templateUrl: '/templates/congregation/speakers/speaker.html',
    providers: [ Title ]
})
export class SpeakerComponent {

    constructor(title: Title) {
        title.setTitle('Congregation App. Speaker details');
    }

}