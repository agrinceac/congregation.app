/**
 * Created by dmitricercel on 15.11.16.
 */
import { Component } from '@angular/core';
import {Congregation} from "./congregation.interface";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'congregation-app',
    templateUrl: '/templates/congregation/congregation.component.html',
    providers: [ Title ]
})
export class CongregationComponent {

    constructor(title: Title) {
        title.setTitle('Congregation App. It helps you to bill info');
    }

    congregation: Congregation = {
        name: 'Кишинев-Траян',
        total: 157,
        pioneers: 31,
        elders: 10,
        ministers: 5
    }

}
