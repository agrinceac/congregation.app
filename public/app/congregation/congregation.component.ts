/**
 * Created by dmitricercel on 15.11.16.
 */
import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'congregation-app',
    templateUrl: '/templates/congregation/congregation.component.html',
    providers: [ Title ]
})
export class CongregationComponent implements OnInit {

    constructor(title: Title) {
        title.setTitle('Congregation App. It helps you to bill info');
    }

    ngOnInit() {
        window.initLanding();
    }
}
