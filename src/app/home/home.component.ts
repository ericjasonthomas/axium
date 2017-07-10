import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

//

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	hometitle = "this is homepage";
	@Input() stuff;
	@Output() onYell = new EventEmitter;

	fireYellEvent(e){
		this.onYell.emit(e);
	}

	//

	//

  constructor() { }

  ngOnInit() {



  }

}
