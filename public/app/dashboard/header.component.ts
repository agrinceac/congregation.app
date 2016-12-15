import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";

@Component({
    selector: 'cg-header',
    templateUrl: '/templates/dashboard/header.html'
})
export class HeaderComponent {
    constructor( private title: Title ){
        this.title.setTitle('Congregation App. Dashboard');
    }
}