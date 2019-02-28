import {Injectable, Injector} from '@angular/core';
import {Person} from './person';
import {RestService} from 'angular4-hal';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends RestService<Person> {

  constructor(injector: Injector) {
    super(Person, 'people', injector);
  }


}
