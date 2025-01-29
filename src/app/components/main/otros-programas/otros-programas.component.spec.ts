import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosProgramasComponent } from './otros-programas.component';

describe('OtrosProgramasComponent', () => {
  let component: OtrosProgramasComponent;
  let fixture: ComponentFixture<OtrosProgramasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OtrosProgramasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtrosProgramasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
