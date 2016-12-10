import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
    public profile: any;
    public authorized: Boolean;

    constructor( private http: Http){
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
}