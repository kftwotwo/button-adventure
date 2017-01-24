/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InBedComponent } from './in-bed.component';

describe('InBedComponent', () => {
  let component: InBedComponent;
  let fixture: ComponentFixture<InBedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InBedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InBedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
