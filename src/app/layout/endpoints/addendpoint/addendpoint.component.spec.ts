import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddendpointComponent } from './addendpoint.component';

describe('AddendpointComponent', () => {
  let component: AddendpointComponent;
  let fixture: ComponentFixture<AddendpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddendpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddendpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
