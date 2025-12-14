import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyItemForm } from './technology-item-form';

describe('TechnologyItemForm', () => {
  let component: TechnologyItemForm;
  let fixture: ComponentFixture<TechnologyItemForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyItemForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyItemForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
