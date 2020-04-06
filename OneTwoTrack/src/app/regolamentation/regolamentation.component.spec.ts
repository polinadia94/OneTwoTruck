import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegolamentationComponent } from './regolamentation.component';

describe('RegolamentationComponent', () => {
  let component: RegolamentationComponent;
  let fixture: ComponentFixture<RegolamentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegolamentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegolamentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
