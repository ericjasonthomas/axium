import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccountComponent } from './account/account.component';
import { Add2cartComponent } from './add2cart/add2cart.component';
import { ProductReviewFormComponent } from './product-review-form/product-review-form.component';
import { RatingComponent } from './rating/rating.component';


const appRoutes = [
	{ path: 'account', component: AccountComponent },
	{ path: '', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AccountComponent,
    Add2cartComponent,
    ProductReviewFormComponent,
    RatingComponent,
  ],
  imports: [
    BrowserModule,
		NgbModule.forRoot(),
		RouterModule.forRoot(
		 appRoutes,
		//  { enableTracing: true } //
	 )
	//  other imports here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
