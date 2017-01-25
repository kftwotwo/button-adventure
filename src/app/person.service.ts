import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { personName } from './creation/creation.component';


@Injectable()
export class PersonService {
personName: Person;
  constructor() { }

  getPerson() {
    return personName;
  }
}
