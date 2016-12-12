import {Component} from '@angular/core';
import {Http} from "@angular/http";
import {Validators, FormBuilder} from "@angular/forms";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
    selector: 'cg-sign-in',
    templateUrl: '/templates/core/authorization/sign-in.component.html',
    providers: [UserService]
})
export class SignInFormComponent {
    public loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });
    public error: Boolean = false;
    public submitted: boolean;
    public profile: any;

    constructor(
        private fb: FormBuilder,
        private http: Http,
        private router: Router,
        private user: UserService
    ) {}
    signIn(event) {
        if ( this.loginForm.valid ) {
            this.http
                .post('/api/auth/signIn', this.user)
                .subscribe(response => {
                    this.router.navigate(['dashboard']);
                }, response => {
                    if ( response.status == 401 ) {
                        this.error = true;
                    } else {
                        console.log(response);
                    }
                });
        }
        this.submitted = true;
    }

    isAuthorized() {
        return this.user.authorized;
    }
}