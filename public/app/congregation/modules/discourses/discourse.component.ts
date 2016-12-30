/**
 * Created by dmitricercel on 15.11.16.
 */
import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";
import {DiscourseService} from "./discourse.service";
import {Discourse} from "./discourse.class";
import {Location} from '@angular/common';

@Component({
    selector: 'cg-discourse',
    templateUrl: '/templates/congregation/discourses/discourse.html',
    providers: [ Title, DiscourseService ]
})
export class DiscourseComponent {
    public id: number;
    public discourse: Discourse;
    public nextDisc: Discourse;
    public prevDisc: Discourse;

    constructor(
        private title: Title,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location,
        private discoursesService: DiscourseService
    ) {
        this.title.setTitle('Congregation App. Discourse details');
        this.route.params.subscribe(params => {
            this.id = +params['id'];
            this.loadDiscourse(this.id);
        });
    }

    loadDiscourse( id ) {
        this.discoursesService
            .details(id)
            .subscribe(response => {
                let result = response.json();
                if ( result.discourse ) {
                    this.discourse = new Discourse(result.discourse);
                }
                if ( result.prev ) {
                    this.prevDisc  = new Discourse(result.prev);
                }
                if ( result.next ) {
                    this.nextDisc  = new Discourse(result.next);
                }

            }, response => {
                if ( response.status == 401 ) {
                    this.router.navigate(['unauthorized']);
                }
            });
    }

    back() {
        this.router.navigate(['discourses/calendar']);
    }

    prev() {

    }

    next() {

    }
}