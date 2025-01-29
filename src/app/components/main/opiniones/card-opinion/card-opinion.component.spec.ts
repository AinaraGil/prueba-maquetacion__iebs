import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOpinionComponent } from './card-opinion.component';

describe('CardOpinionComponent', () => {
  let component: CardOpinionComponent;
  let fixture: ComponentFixture<CardOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardOpinionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
