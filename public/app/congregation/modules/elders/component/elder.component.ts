/**
 * Created by dmitricercel on 22.11.16.
 */
import {Component, EventEmitter, Input, Output} from "@angular/core";
import {ElderService} from "../service/elder.service";

@Component({
    selector: 'cg-elder',
    inputs: ['elder'],
    outputs: ['elderSelected'],
    template: `<div class="elder" (click)="selectElder()">{{elder.name}}</div>`
})
export class ElderComponent {
    @Input elder: ElderService;
    @Output elderSelected: EventEmitter<ElderService> = new EventEmitter<ElderService>();

    selectElder(){
        this.elderSelected.emit(this.elder);
    }
}