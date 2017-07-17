import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-product-review-form',
  templateUrl: './product-review-form.component.html',
  styleUrls: ['./product-review-form.component.scss']
})

export class ProductReviewFormComponent implements OnInit {
	closeResult: string;
 // constructor() { }
	constructor(private modalService: NgbModal) {}

	open(content) {
	 this.modalService.open(content).result.then((result) => {
		 this.closeResult = `Closed with: ${result}`;
	 }, (reason) => {
		 this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
	 });
 }
 //
 private getDismissReason(reason: any): string {
	if (reason === ModalDismissReasons.ESC) {
		return 'by pressing ESC';
	} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
		return 'by clicking on a backdrop';
	} else {
		return  `with: ${reason}`;
	}
}

  ngOnInit() {
  }

}
