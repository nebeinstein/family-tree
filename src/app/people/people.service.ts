import { Injectable } from '@angular/core';

import { Person } from './person';

@Injectable()
export class PeopleService {
	private people: Person[] = [
		new Person('Claudia', 'Beinstein', 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/254768_105205376245790_1861261_n.jpg?oh=de35554c930e7aa7ce6b4ae9830b0e7c&oe=596D4828', '26 Jan 1965', 'N/A', 'David Ross', 'Gilberte Ross', 'mama'),
		new Person('Nicole', 'Beinstein', 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/968805_10201298303120671_1562040719_n.jpg?oh=86644255c12c550dfef08098fbf273ea&oe=5967F4F0', '13 Aug 1994', 'N/A', 'David Beinstein', 'Claudia Beinstein', 'me'),
		new Person('Aaron', 'Beinstein', 'https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/13178541_1153322328026046_2258063441333717034_n.jpg?oh=43b223d4fe1d55c0f852588ba3c62ba9&oe=596A610A', '14 Apr 1997', 'N/A', 'David Beinstein', 'Claudia Beinstein', 'brother 1'),
		new Person('Evan', 'Beinstein', 'http://2ndhandcycles.com/themes/theme1/img/nopic.jpg', '12 Mar 2006', 'N/A', 'David Beinstein', 'Claudia Beinstein', 'brother 2')
	];

	constructor() { }

	getPeople(){
		return this.people;
	}

}
