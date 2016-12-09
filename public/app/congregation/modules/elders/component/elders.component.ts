/**
 * Created by dmitricercel on 20.11.16.
 */
import {Component} from "@angular/core";
import {EldersService} from "../service/elders.service";
import 'rxjs/add/operator/map';
import {Elder} from "./elder.interface";
import {ElderService} from "../service/elder.service";

@Component({
    template: `
        <h2>Elders</h2>
        <h4>Current elder: {{elder ? elder.name : 'Not selected'}}</h4>
        <ul>
            <li *ngFor="let elder of elders; let isEven = even" [style.color]="isEven ? 'green' : 'blue' " >
                <cg-elder (elderSelected)="setCurrentElder($event)" [elder]="elder"></cg-elder>
            </li>
        </ul>
    `,
    providers: [ EldersService ]
})
export class EldersComponent {
    constructor(private eldersService: EldersService){
        this.list();
    }

    elders: Array<ElderService>;
    elder: ElderService;

    list(){
        this.eldersService.list()
            .subscribe(names => {
                console.log(names);
                this.elders = names.json();
            });
    }

    setCurrentElder( elder: ElderService) {
        this.elder = elder;
    }

}