import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOperningComponent } from './job-operning.component';

describe('JobOperningComponent', () => {
  let component: JobOperningComponent;
  let fixture: ComponentFixture<JobOperningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobOperningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobOperningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
