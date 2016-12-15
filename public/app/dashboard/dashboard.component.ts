import {Component} from "@angular/core";
import {Title} from "@angular/platform-browser";
import {UserService} from "../core/authorization/service/user.service";

@Component({
    selector: 'cg-dashboard',
    templateUrl: '/templates/dashboard/dashboard.html',
    styleUrls  : ['../../css/dashboard.component.css'],
    providers: [UserService]
})
export class DashboardComponent {
    constructor( private title: Title, private user: UserService ){
        this.title.setTitle('Congregation App. Dashboard');
        this.user.isAuthorizedForComponent();
    }
}