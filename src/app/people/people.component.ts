import { Component, OnInit } from '@angular/core';

import { Person } from './person';

@Component({
  selector: 'ft-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
	selectedPerson: Person;

	constructor() { }

	ngOnInit() {

	}

}
