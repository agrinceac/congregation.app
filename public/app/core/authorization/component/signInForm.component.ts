/**
 * Created by dmitricercel on 28.11.16.
 */
import { Component } from '@angular/core';
import {Http, Headers} from "@angular/http";
import {Validators, FormBuilder} from "@angular/forms";

class User {
    _token: string;
    username: string;
    password: string;
}

@Component({
    selector: 'cg-sign-in',
    templateUrl: '/templates/core/authorization/sign-in.component.html'
})
export class SignInFormComponent {
    public user: User = new User();
    public loginForm = this.fb.group({
        email: ["", Validators.required],
        password: ["", Validators.required]
    });
    public submitted: boolean;

    constructor(private fb: FormBuilder, private http: Http){}

    signIn(event) {
        if ( this.loginForm.valid ) {
            this.user._token = $('meta[name="csrf-token"]').attr('content');
            let body         = JSON.stringify(this.user);
            let headers      = new Headers({ '_token': this.user._token });

            this.http
                .post('/api/auth/signIn', body)
                .subscribe(response => {
                    console.log(response);
                }, error => {
                    console.log(error);
                });
        }

        this.submitted = true;
    }
}