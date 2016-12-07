"use strict";
var Rx_1 = require("rxjs/Rx");
/**
 * Created by dmitricercel on 20.11.16.
 */
var FakeEldersService = (function () {
    function FakeEldersService() {
    }
    FakeEldersService.prototype.list = function () {
        return Rx_1.Observable.of([
            { 'name': 'Чертан Михаил' }
        ]);
    };
    return FakeEldersService;
}());
exports.FakeEldersService = FakeEldersService;
