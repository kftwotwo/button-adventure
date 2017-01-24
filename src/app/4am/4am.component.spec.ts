/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { 4amComponent } from './4am.component';

describe('4amComponent', () => {
  let component: 4amComponent;
  let fixture: ComponentFixture<4amComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 4amComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(4amComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
