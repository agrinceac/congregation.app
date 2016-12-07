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
 * Created by dmitricercel on 22.11.16.
 */
var core_1 = require("@angular/core");
var elder_service_1 = require("../service/elder.service");
var ElderComponent = (function () {
    function ElderComponent() {
        this.elderSelected = new core_1.EventEmitter();
    }
    ElderComponent.prototype.selectElder = function () {
        this.elderSelected.emit(this.elder);
    };
    __decorate([
        core_1.Input, 
        __metadata('design:type', elder_service_1.ElderService)
    ], ElderComponent.prototype, "elder", void 0);
    __decorate([
        core_1.Output, 
        __metadata('design:type', core_1.EventEmitter)
    ], ElderComponent.prototype, "elderSelected", void 0);
    ElderComponent = __decorate([
        core_1.Component({
            selector: 'cg-elder',
            inputs: ['elder'],
            outputs: ['elderSelected'],
            template: "<div class=\"elder\" (click)=\"selectElder()\">{{elder.name}}</div>"
        }), 
        __metadata('design:paramtypes', [])
    ], ElderComponent);
    return ElderComponent;
}());
exports.ElderComponent = ElderComponent;
