import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card2Component } from './card.component';

describe('Card2Componen', () => {
  let component: Card2Component;
  let fixture: ComponentFixture<Card2Componen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
