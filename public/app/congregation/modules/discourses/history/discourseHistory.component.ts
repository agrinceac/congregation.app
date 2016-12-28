/**
 * Created by dmitricercel on 15.11.16.
 */
import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {DiscourseService} from "../discourse.service";

@Component({
    selector: 'cg-discourse-history',
    templateUrl: '/templates/congregation/discourses/history/discourseHistory.html',
    styleUrls: ['css/discourseHistory.css'],
    providers: [ DiscourseService ]
})
export class DiscourseHistoryComponent implements OnInit {
    @Input() discourseId: number;

    private history: Array<any>;

    constructor( private discoursesService: DiscourseService ) {}

    ngOnInit() {
        this.loadLog(this.discourseId);
    }

    loadLog(id) {
        this.discoursesService
            .log(id)
            .subscribe(response => {
                this.history = response.json();
            });
    }
}