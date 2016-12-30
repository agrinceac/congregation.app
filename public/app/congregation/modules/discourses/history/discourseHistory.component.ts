/**
 * Created by dmitricercel on 15.11.16.
 */
import {Component, Input, Output, EventEmitter, OnInit, OnChanges} from '@angular/core';
import {DiscourseService} from "../discourse.service";
import {Discourse} from "../discourse.class";

@Component({
    selector: 'cg-discourse-history',
    templateUrl: '/templates/congregation/discourses/history/discourseHistory.html',
    styleUrls: ['css/discourseHistory.css'],
    providers: [ DiscourseService ]
})
export class DiscourseHistoryComponent implements OnInit, OnChanges {
    @Input() discourseId: number;
    @Input() discourse: Discourse;

    private history: Array<any>;

    constructor( private discoursesService: DiscourseService ) {}

    ngOnInit() {
        if ( this.discourseId ) {
            this.loadLog(this.discourseId);
        }
        if ( this.discourse ) {
            this.history = this.discourse.getHistory();
        }
    }

    ngOnChanges() {
        if ( this.discourseId ) {
            this.loadLog(this.discourseId);
        }
        if ( this.discourse ) {
            this.history = this.discourse.getHistory();
        }
    }

    loadLog(id) {
        this.discoursesService
            .log(id)
            .subscribe(response => {
                this.history = response.json();
            });
    }
}