import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'cg-dashboard',
    templateUrl: '/templates/dashboard/dashboard.html',
    styleUrls  : ['../../css/dashboard.component.css']
})
export class DashboardComponent {
    constructor( private title: Title ){
        this.title.setTitle('Congregation App. Dashboard');
    }
}