import {Observable} from "rxjs/Rx";
/**
 * Created by dmitricercel on 20.11.16.
 */

export class FakeEldersService {
    list(){
        return Observable.of([
            { 'name': 'Чертан Михаил' }
        ]);
    }
}