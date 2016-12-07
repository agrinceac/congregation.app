"use strict";
var elder_service_1 = require("../service/elder.service");
/**
 * Created by dmitricercel on 27.11.16.
 */
describe('Elder service testing', function () {
    it('Construct an elder', function () {
        var dmitri = new elder_service_1.ElderService({
            name: 'Dmitri Cercel',
            id: 1
        });
        expect(dmitri.getName()).toBe('Dmitri Cercel');
        expect(dmitri.getId()).toBe(1);
    });
});
