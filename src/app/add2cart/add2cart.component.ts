import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add2cart',
  templateUrl: './add2cart.component.html',
  styleUrls: ['./add2cart.component.scss']
})
export class Add2cartComponent implements OnInit {

SelectColor:string;
SelectSize:string;
SelectQuantity:number;

	sizes = [
		{name:"X-Small"},
		{name:"Small"},
		{name:"Medium"},
		{name:"Large"},
		{name:"X-Large"},
		{name:"XX-Large"}
	];

	colors = [
		{name:"Grey"},
		{name:"Red"},
		{name:"Blue"},
		{name:"Black"},
	];

colorchange(e) {
	// console.log("yo " + e.target.value );
	this.SelectColor = e.target.value;
}
sizechange(e) {
	console.log("yo " + e.target.value );
	this.SelectSize = e.target.value;
}

plusone(){
	this.SelectQuantity = this.SelectQuantity + 1;
	console.log("yo " + this.SelectQuantity);
}
minusone(){
	if (this.SelectQuantity >= 2){
		this.SelectQuantity = this.SelectQuantity - 1;
		console.log("yo " + this.SelectQuantity);
	} else {
		console.log("sorry can't do less then 1");
	}
}

  constructor() {
		console.log("constructor")
	}

  ngOnInit() {

		this.SelectColor = "Select Color";
		this.SelectSize = "Select Size";
		this.SelectQuantity = 1;

  }

}
