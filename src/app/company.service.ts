import {Injectable, Injector} from '@angular/core';
import {Company} from './company';
import {AbstractRestService} from './abstract-rest.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyService extends AbstractRestService<Company, any> {

  constructor(injector: Injector) {
    super(Company, 'companies', injector);
  }
}
