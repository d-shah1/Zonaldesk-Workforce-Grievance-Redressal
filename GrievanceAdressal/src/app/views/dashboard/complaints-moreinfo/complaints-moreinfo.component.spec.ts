import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplaintsMoreinfoComponent } from './complaints-moreinfo.component';

describe('ComplaintsMoreinfoComponent', () => {
  let component: ComplaintsMoreinfoComponent;
  let fixture: ComponentFixture<ComplaintsMoreinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComplaintsMoreinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplaintsMoreinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
