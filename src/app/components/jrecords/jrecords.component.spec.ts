import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JrecordsComponent } from './jrecords.component';

describe('JrecordsComponent', () => {
  let component: JrecordsComponent;
  let fixture: ComponentFixture<JrecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JrecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JrecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
