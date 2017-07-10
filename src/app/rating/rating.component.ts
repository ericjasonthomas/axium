import { Component, OnInit } from '@angular/core';

import {NgbRatingConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
	styles: [`
		.star {
      font-size: 1.5rem;
			letter-spacing:.2rem;
      color: #ccc;
			-webkit-text-stroke: 1px #4698a4;
    }
    .filled {
      color: #4698a4;
    }
`],
	providers: [NgbRatingConfig] // add NgbRatingConfig to the component providers
})

export class RatingComponent implements OnInit {

//currentRate = 5;
constructor(config: NgbRatingConfig) {
// customize default values of ratings used by this component tree
config.max = 5;
config.readonly = false;
}

  ngOnInit() {
  }

}
