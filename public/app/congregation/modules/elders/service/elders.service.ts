import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';
/**
 * Created by dmitricercel on 20.11.16.
 */
@Injectable()
export class EldersService {
    constructor( private http: Http){}

    list() {
        return this.http.get('/api/elder');
    }
}