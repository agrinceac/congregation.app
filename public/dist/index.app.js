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
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require("@angular/http");
require('rxjs/Rx');
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var router_1 = require('@angular/router');
var index_component_1 = require("./index.component");
var congregation_module_1 = require("./congregation/congregation.module");
var speakers_module_1 = require("./congregation/modules/speakers/speakers.module");
var appRoutes = [];
var IndexModule = (function () {
    function IndexModule() {
    }
    IndexModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.ReactiveFormsModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                material_1.MaterialModule.forRoot(),
                router_1.RouterModule.forRoot(appRoutes),
                congregation_module_1.CongregationModule,
                speakers_module_1.SpeakersModule
            ],
            declarations: [
                index_component_1.IndexComponent
            ],
            bootstrap: [
                index_component_1.IndexComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], IndexModule);
    return IndexModule;
}());
exports.IndexModule = IndexModule;
