import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyItemDetails } from './technology-item-details';

describe('TechnologyItemDetails', () => {
  let component: TechnologyItemDetails;
  let fixture: ComponentFixture<TechnologyItemDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyItemDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyItemDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
