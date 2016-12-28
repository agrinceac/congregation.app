import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/map';

@Injectable()
export class DiscourseService {
    private baseRoute: string = '/api/discourses';

    constructor( private http: Http){}

    list() {
        return this.http.get(this.baseRoute);
    }

    details(id) {
        return this.http.get(this.baseRoute+'/'+id);
    }

    log(id) {
        return this.http.get(this.baseRoute+'/'+id+'/log');
    }
}