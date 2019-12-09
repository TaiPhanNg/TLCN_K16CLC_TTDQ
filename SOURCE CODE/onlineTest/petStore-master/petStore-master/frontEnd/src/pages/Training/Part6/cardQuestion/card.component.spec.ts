import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card8Component } from './card.component';

describe('Card8Componen', () => {
  let component: Card8Component;
  let fixture: ComponentFixture<Card8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card8Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
