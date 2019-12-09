import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card7Component } from './card.component';

describe('Card7Componen', () => {
  let component: Card7Component;
  let fixture: ComponentFixture<Card7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
