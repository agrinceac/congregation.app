"use strict";
var ElderService = (function () {
    function ElderService(body) {
        this.body = body;
    }
    ElderService.prototype.setName = function (name) {
        this.body.name = name;
        return true;
    };
    ElderService.prototype.getName = function () {
        return this.body.name;
    };
    ElderService.prototype.getId = function () {
        return this.body.id;
    };
    return ElderService;
}());
exports.ElderService = ElderService;
