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
var User = (function () {
    function User() {
    }
    return User;
}());
var SignInFormComponent = (function () {
    function SignInFormComponent() {
        this.user = new User();
    }
    SignInFormComponent.prototype.register = function () {
        console.log(this.user);
    };
    SignInFormComponent = __decorate([
        core_1.Component({
            selector: 'ns-register',
            templateUrl: './register_form_cmp.html',
            moduleId: module.id
        }), 
        __metadata('design:paramtypes', [])
    ], SignInFormComponent);
    return SignInFormComponent;
}());
exports.SignInFormComponent = SignInFormComponent;
