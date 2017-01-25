import { Component } from '@angular/core';
import { Person } from '../person.model';
import { PersonService } from '../person.service';

export var personName: Person;

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html'
})

export class CreationComponent {
  constructor() { }

  submitName(name){
    personName = new Person(name);
  }
}
