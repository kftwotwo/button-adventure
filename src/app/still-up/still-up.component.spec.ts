/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StillUpComponent } from './still-up.component';

describe('StillUpComponent', () => {
  let component: StillUpComponent;
  let fixture: ComponentFixture<StillUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StillUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StillUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
