/**
 * Created by dmitricercel on 15.11.16.
 */
import {Component} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {SpeakerService} from "./speaker.service";
import {Router} from "@angular/router";

@Component({
    selector: 'cg-speakers',
    templateUrl: '/templates/congregation/speakers/speakers.html',
    providers: [ Title, SpeakerService ]
})
export class SpeakersComponent {
    speakers: Array<any>;

    constructor(
        private title: Title,
        private speakerService: SpeakerService,
        private router: Router
    ) {
        title.setTitle('Congregation App. Speaker details');
        this.loadSpeakers();
    }

    loadSpeakers(){
        this.speakerService
            .list()
            .subscribe(response => {
            this.speakers = response.json();
        }, response => {
            if ( response.status == 401 ) {
                this.router.navigate(['unauthorized']);
            }
        });
    }
}