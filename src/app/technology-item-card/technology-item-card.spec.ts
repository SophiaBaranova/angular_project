import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyItemCard } from './technology-item-card';

describe('TechnologyItemCard', () => {
  let component: TechnologyItemCard;
  let fixture: ComponentFixture<TechnologyItemCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyItemCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyItemCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
