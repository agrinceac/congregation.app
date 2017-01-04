import {Component} from '@angular/core';
import {SpeechesService} from "./speeches.service";
import {Router} from "@angular/router";

@Component({


    // selector: 'cg-speeches',


    templateUrl: '/templates/congregation/speeches/speeches.html',
    providers: [ SpeechesService ]
})
export class SpeechesComponent {
    speeches: Array<any>;

    constructor(
        private speechesService: SpeechesService,
        private router: Router
    ) {
        this.loadSpeakers();
    }

    loadSpeakers(){
        this.speechesService
            .list()
            .subscribe(response => {
                this.speeches = response.json();
            }, response => {
                if ( response.status == 401 ) {
                    this.router.navigate(['unauthorized']);
                }
            });
    }
}
