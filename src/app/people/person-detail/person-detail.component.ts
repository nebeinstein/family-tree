import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Person } from '../person';

@Component({
  selector: 'ft-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.css']
})
export class PersonDetailComponent implements OnInit {
	@Input() selectedPerson: Person;

	constructor(private route: ActivatedRoute) {
		// this.selectedPerson.name = this.route.snapshot.params['name'];
		// this.selectedPerson.description = this.route.snapshot.params['id'];
	}

	ngOnInit() { }

}
