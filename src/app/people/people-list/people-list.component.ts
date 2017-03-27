import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Person } from '../person';
import { PeopleService } from '../people.service';

@Component({
  selector: 'ft-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
	people: Person[] = [];
	@Output() personSelected = new EventEmitter<Person>();

	constructor(private pServ: PeopleService) { }

	ngOnInit() {
		this.people = this.pServ.getPeople();
	}
	
	onSelected(passedPerson: Person){
		this.personSelected.emit(passedPerson);
	}

}
