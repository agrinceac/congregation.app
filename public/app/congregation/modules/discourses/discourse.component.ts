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
                this.discourse = new Discourse(response.json());
                console.log(this);
            }, response => {
                if ( response.status == 401 ) {
                    this.router.navigate(['unauthorized']);
                }
            });
    }

    back() {
        this.location.back();
    }

    prev() {

    }

    next() {

    }
}