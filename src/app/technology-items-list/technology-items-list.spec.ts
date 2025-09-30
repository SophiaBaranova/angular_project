import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyItemsList } from './technology-items-list';

describe('TechnologyItemsList', () => {
  let component: TechnologyItemsList;
  let fixture: ComponentFixture<TechnologyItemsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyItemsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyItemsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
