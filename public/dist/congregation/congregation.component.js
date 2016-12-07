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
 * Created by dmitricercel on 15.11.16.
 */
var core_1 = require('@angular/core');
var platform_browser_1 = require("@angular/platform-browser");
var CongregationComponent = (function () {
    function CongregationComponent(title) {
        this.congregation = {
            name: 'Кишинев-Траян',
            total: 157,
            pioneers: 31,
            elders: 10,
            ministers: 5
        };
        title.setTitle('Congregation App. It helps you to bill info');
    }
    CongregationComponent = __decorate([
        core_1.Component({
            selector: 'congregation-app',
            templateUrl: '/templates/congregation/congregation.component.html',
            providers: [platform_browser_1.Title]
        }), 
        __metadata('design:paramtypes', [platform_browser_1.Title])
    ], CongregationComponent);
    return CongregationComponent;
}());
exports.CongregationComponent = CongregationComponent;
