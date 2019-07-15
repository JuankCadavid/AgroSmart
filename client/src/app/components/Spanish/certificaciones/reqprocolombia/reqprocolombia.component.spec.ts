import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqprocolombiaComponent } from './reqprocolombia.component';

describe('ReqprocolombiaComponent', () => {
  let component: ReqprocolombiaComponent;
  let fixture: ComponentFixture<ReqprocolombiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqprocolombiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqprocolombiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
