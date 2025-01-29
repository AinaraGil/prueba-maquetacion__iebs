import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMasterSeoSemComponent } from './info-master-seo-sem.component';

describe('InfoMasterSeoSemComponent', () => {
  let component: InfoMasterSeoSemComponent;
  let fixture: ComponentFixture<InfoMasterSeoSemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoMasterSeoSemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMasterSeoSemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
