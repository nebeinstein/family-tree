import { Component, OnInit, Input } from '@angular/core';

import { Person } from '../../person';

@Component({
  selector: 'ft-person-item',
  templateUrl: './person-item.component.html',
  styleUrls: ['./person-item.component.css']
})
export class PersonItemComponent implements OnInit {
	@Input() person: Person;
	@Input() personId: number;

	constructor() {	}

	ngOnInit() { }

}
