import {Component} from '@angular/core';
import {PersonService} from './person.service';
import {Person} from './person';
import {Address} from './address';
import {AddressService} from './address.service';
import {CompanyService} from './company.service';
import {ResourceService} from 'angular4-hal/src/resource.service';
import {Company} from './company';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-hal';

  constructor(private personService: PersonService,
              private addressService: AddressService,
              private resourceService: ResourceService,
              private companyService: CompanyService) {
    this.personService.getAll().subscribe(data => {
      console.log(data);
    });

    this.personService.get(1).subscribe((person: Person) => {
      console.log(person);
      person.getRelation<Address>(Address, 'address').subscribe((address: Address) => {
        console.log(address);
      });
    });
    console.log(personService.totalPages());
    console.log(personService.totalElement());


    this.addressService.get(1).subscribe((address: Address) => {
      console.log(address);
      address.getRelationArray<Person>(Person, 'people').subscribe((people: Person[]) => {
        console.log(people);
      });
    });

    this.companyService.search('findAll', {
      params: [{
        key: 'filter[owner][EQ]',
        value: 'george'
      }]
    }).subscribe(data => {
      console.log(data);
    });

    this.companyService.pageSearch('findAll', {
      params: [{
        key: 'filter[owner][EQ]',
        value: 'george'
      }]
    }).subscribe(data => {
      console.log(data);
    });


    this.resourceService.search(Company, 'findAll', 'companies', '_embedded', {
      params: [{
        key: 'filter[owner][EQ]',
        value: 'george'
      }]
    }).subscribe(data => {
      console.log(data);
    });


    const params = [
      {
        key: 'projection',
        value: 'addressprojection'
      }
    ];
    this.addressService.get(1, params).subscribe((address: Address) => {
      console.log(address);
    });

    const name = 'Bradford';
    const options = {
      params: [
        {
          key: 'firstName',
          value: name
        }
      ]
    };
    this.personService.search('findByFirstName', options).subscribe((people: Person[]) => {
      console.log(people);
    });

  }

}
