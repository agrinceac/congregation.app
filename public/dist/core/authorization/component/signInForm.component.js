"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by dmitricercel on 28.11.16.
 */
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var User = (function () {
    function User() {
    }
    return User;
}());
var SignInFormComponent = (function () {
    function SignInFormComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        this.user = new User();
        this.loginForm = this.fb.group({
            email: ["", forms_1.Validators.required],
            password: ["", forms_1.Validators.required]
        });
    }
    SignInFormComponent.prototype.signIn = function (event) {
        if (this.loginForm.valid) {
            this.http
                .post('/api/auth/signIn', this.user)
                .subscribe(function (response) {
                console.log(response);
            }, function (error) {
                console.log(error);
            });
        }
        this.submitted = true;
    };
    SignInFormComponent = __decorate([
        core_1.Component({
            selector: 'cg-sign-in',
            templateUrl: '/templates/core/authorization/sign-in.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, http_1.Http])
    ], SignInFormComponent);
    return SignInFormComponent;
}());
exports.SignInFormComponent = SignInFormComponent;
