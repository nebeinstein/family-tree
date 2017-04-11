import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ft-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
	// Length: number;
	// angle: number;
	// transform: string;
	// line;

	constructor() { }

	ngOnInit() { }

	// createLine(x1: number, y1: number, x2: number, y2: number){
	// 	this.Length = Math.sqrt((x1-x2)*(x1-x2) + (y1-y2)*(y1-y2));
	// 	this.angle = Math.atan2(y2-y1, x2-x1) * 180/Math.PI;
	// 	this.transform = 'rotate(' + this.angle + 'deg)';

	// 	this.line = $('<div>')
	// 		.appentTo("#page")
	// 		.addClass('line')
	// 		.css({
	// 			'position': 'absolute',
	// 			'transform': this.transform
	// 		})
	// 		.width(this.Length)
	// 		.offset({left: x1, top: y1});

	// 	return this.line;
	// }
}
