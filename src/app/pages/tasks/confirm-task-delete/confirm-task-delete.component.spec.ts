import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTaskDeleteComponent } from './confirm-task-delete.component';

describe('ConfirmTaskDeleteComponent', () => {
  let component: ConfirmTaskDeleteComponent;
  let fixture: ComponentFixture<ConfirmTaskDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmTaskDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTaskDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
