import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

@Injectable()
export class UserService {
    public profile: any;
    public authorized: Boolean;

    constructor( private http: Http, private router: Router ){
        this.loadProfile();
        this.isAuthorized();
    }

    loadProfile() {
        this.http
            .get('/api/profile')
            .subscribe(
                response => {
                    this.profile = response.json();
                },
                response => {
                    console.log(response);
                },
            );

        return this;
    }

    getProfile() {
        return this.profile;
    }

    isAuthorized() {
        this.http
            .get('/api/profile')
            .subscribe(
                response => {
                    this.authorized = true;
                },
                response => {
                    this.authorized = false;
                },
            );

        return this.authorized;
    }

    isAuthorizedForComponent() {
        this.http
            .get('/api/profile')
            .subscribe(
                response => {
                    console.log('You are authorized. Congratulation!');
                },
                response => {
                    this.router.navigate(['unauthorized']);
                },
            );
    }
}