import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCorporateComponent } from './registration-corporate.component';

describe('RegistrationCorporateComponent', () => {
  let component: RegistrationCorporateComponent;
  let fixture: ComponentFixture<RegistrationCorporateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationCorporateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationCorporateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
