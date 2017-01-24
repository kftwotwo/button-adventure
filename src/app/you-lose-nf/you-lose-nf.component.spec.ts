/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YouLoseNfComponent } from './you-lose-nf.component';

describe('YouLoseNfComponent', () => {
  let component: YouLoseNfComponent;
  let fixture: ComponentFixture<YouLoseNfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouLoseNfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouLoseNfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
