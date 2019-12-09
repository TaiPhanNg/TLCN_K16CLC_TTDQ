import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Card6Component } from './card.component';

describe('Card6Componen', () => {
  let component: Card6Component;
  let fixture: ComponentFixture<Card6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Card6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Card6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
