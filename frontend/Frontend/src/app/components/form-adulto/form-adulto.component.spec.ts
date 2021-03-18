import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAdultoComponent } from './form-adulto.component';

describe('FormAdultoComponent', () => {
  let component: FormAdultoComponent;
  let fixture: ComponentFixture<FormAdultoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAdultoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAdultoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
