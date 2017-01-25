import { Component, OnChanges } from '@angular/core';
import { PersonService } from './person.service';
import { Person } from './person.model';
import { personName } from './creation/creation.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PersonService]
})

export class AppComponent implements OnChanges {
  personName: Person;
  constructor(private personService: PersonService) { }

  getName() {
    this.personName = this.personService.getPerson();
  }

  ngOnChanges() {
    console.log(this.personService.getPerson());
    this.personService.getPerson();
  }
}
