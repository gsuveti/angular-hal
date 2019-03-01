import {Resource} from 'angular4-hal';
import {Address} from './address';

export class Person extends Resource {
  firstName: string;
  lastName: string;
  deleted: boolean;
  address: Address;
}
