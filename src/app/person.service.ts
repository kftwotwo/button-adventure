import { Injectable } from '@angular/core';
// import { PERSON } from "./creation/creation.component";
import { Person } from './person.model';


@Injectable()
export class PersonService {

  constructor() { }

  PERSON = new Person('Yogi Bear');

  getPerson() {
    return this.PERSON;
  }
}
