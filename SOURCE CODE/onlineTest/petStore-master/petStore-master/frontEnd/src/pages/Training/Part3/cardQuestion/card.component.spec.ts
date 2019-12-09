import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card3Component } from './card.component';

describe('Card3Componen', () => {
  let component: Card3Component;
  let fixture: ComponentFixture<Card3Componen>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
