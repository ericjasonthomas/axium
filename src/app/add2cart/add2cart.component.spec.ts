import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Add2cartComponent } from './add2cart.component';

describe('Add2cartComponent', () => {
  let component: Add2cartComponent;
  let fixture: ComponentFixture<Add2cartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add2cartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add2cartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
