import { Injectable } from '@angular/core';

import { Person } from './person';

@Injectable()
export class PeopleService {
	private people: Person[] = [
		new Person('Nicole Beinstein', 'aged 23', 'https://www.facebook.com/photo.php?fbid=10207909998928934&set=a.1597050607244.79387.1265350809&type=3&theater'),
		new Person('Aaron Beinstein', 'aged 20', 'https://www.facebook.com/photo.php?fbid=1153322328026046&set=a.148786615146294.24596.100000448685534&type=3&theater'),
		new Person('Evan Beinstein', 'aged 11', 'https://www.facebook.com/photo.php?fbid=10154574086493579&set=a.10150488294093579.377545.591933578&type=3&theater')
	];

	constructor() { }

	getPeople(){
		return this.people;
	}

}
