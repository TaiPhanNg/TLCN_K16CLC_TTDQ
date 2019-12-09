import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card9Component } from './card.component';

describe('Card9Componen', () => {
  let component: Card9Component;
  let fixture: ComponentFixture<Card9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card9Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
