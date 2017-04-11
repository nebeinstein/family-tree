import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-my-tree',
  templateUrl: './my-tree.component.html',
  styleUrls: ['./my-tree.component.css']
})
export class MyTreeComponent implements OnInit {
	parentText = "Parent";

	constructor() { }

	ngOnInit() { }

}
