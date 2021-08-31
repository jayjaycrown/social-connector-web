import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidategrComponent } from './validategr.component';

describe('ValidategrComponent', () => {
  let component: ValidategrComponent;
  let fixture: ComponentFixture<ValidategrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidategrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidategrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
