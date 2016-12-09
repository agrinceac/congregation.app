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
 * Created by dmitricercel on 20.11.16.
 */
var core_1 = require("@angular/core");
var elders_service_1 = require("../service/elders.service");
require('rxjs/add/operator/map');
var EldersComponent = (function () {
    function EldersComponent(eldersService) {
        this.eldersService = eldersService;
        this.list();
    }
    EldersComponent.prototype.list = function () {
        var _this = this;
        this.eldersService.list()
            .subscribe(function (names) {
            console.log(names);
            _this.elders = names.json();
        });
    };
    EldersComponent.prototype.setCurrentElder = function (elder) {
        this.elder = elder;
    };
    EldersComponent = __decorate([
        core_1.Component({
            template: "\n        <h2>Elders</h2>\n        <h4>Current elder: {{elder ? elder.name : 'Not selected'}}</h4>\n        <ul>\n            <li *ngFor=\"let elder of elders; let isEven = even\" [style.color]=\"isEven ? 'green' : 'blue' \" >\n                <cg-elder (elderSelected)=\"setCurrentElder($event)\" [elder]=\"elder\"></cg-elder>\n            </li>\n        </ul>\n    ",
            providers: [elders_service_1.EldersService]
        }), 
        __metadata('design:paramtypes', [elders_service_1.EldersService])
    ], EldersComponent);
    return EldersComponent;
}());
exports.EldersComponent = EldersComponent;
