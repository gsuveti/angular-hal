import {Component} from '@angular/core';
import {PersonService} from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-hal';

  constructor(private personService: PersonService) {
    this.personService.getAll().subscribe(data => {
      console.log(data);
    });
  }
}
