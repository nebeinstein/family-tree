import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ft-tree-node',
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent implements OnInit {
	@Input() text: string;

	constructor() { }

	ngOnInit() { }

}
