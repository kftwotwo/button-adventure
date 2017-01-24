/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CuddleDogComponent } from './cuddle-dog.component';

describe('CuddleDogComponent', () => {
  let component: CuddleDogComponent;
  let fixture: ComponentFixture<CuddleDogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuddleDogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuddleDogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
