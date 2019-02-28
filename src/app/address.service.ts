import {Injectable, Injector} from '@angular/core';
import {RestService} from 'angular4-hal';
import {Address} from './address';

@Injectable({
  providedIn: 'root'
})
export class AddressService extends RestService<Address> {

  constructor(injector: Injector) {
    super(Address, 'addresses', injector);
  }


}
