import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [PersonService]
})
export class AppComponent implements OnInit {
  personName = null;
  constructor(private personService: PersonService) { }

  ngOnInit() {
    this.personName = this.personService.getPerson();
  }
}
