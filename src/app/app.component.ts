import { Component } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'app';
	name = 'yo son....';

	stuff = {
		name: "thatguy",
		belt: "blue"
	};

	yell(e){
		alert('this is it');
	}

	alertMe(){
		alert("yo");
	};

}
