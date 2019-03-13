import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PersonService} from '../person.service';
import {Person} from '../person';
import {AddressService} from '../address.service';
import {Address} from '../address';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private personService: PersonService,
    private addressService: AddressService
  ) {
  }

  personId: string;
  person: Person;
  newAddr: boolean;

  ngOnInit() {
    this.personId = this.route.snapshot.paramMap.get('id');
    this.personService.get(this.personId).subscribe(
      res => {
        this.person = res;

        this.person.getRelation<Address>(Address, 'address').subscribe(
          (address: Address) => {
            this.person.address = address;
            this.newAddr = false;
          }, error => {
            console.log(true);
            this.newAddr = true;
            this.person.address = new Address();
          });

      }
    );
  }

  onSubmit() {
    if (this.newAddr === true) {
      this.addressService.create(this.person.address).subscribe(
        (res: Address) => {
          this.person.addRelation('address', res).subscribe(
            newRes => console.log(newRes)
          );
        }
      );
    }
  }
}
