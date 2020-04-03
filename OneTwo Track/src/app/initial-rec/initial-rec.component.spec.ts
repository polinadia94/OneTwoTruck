import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialRecComponent } from './initial-rec.component';

describe('InitialRecComponent', () => {
  let component: InitialRecComponent;
  let fixture: ComponentFixture<InitialRecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialRecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
