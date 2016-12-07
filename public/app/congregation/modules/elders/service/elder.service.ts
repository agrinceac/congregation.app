/**
 * Created by dmitricercel on 27.11.16.
 */
import {Http} from "@angular/http";
import {Elder} from "../component/elder.interface";

export class ElderService implements Elder {
    constructor( private body: any){}

    setName( name: string ) {
        this.body.name = name;
        return true;
    }

    getName() {
        return this.body.name;
    }

    getId() {
        return this.body.id;
    }
}