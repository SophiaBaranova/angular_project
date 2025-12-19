import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Location } from '@angular/common';
import { of } from 'rxjs';

import { TechnologyItemCard } from '../technology-item-card/technology-item-card';
import { TechnologyItemDetails } from '../technology-item-details/technology-item-details';
import { TechnologyItemsService } from '../services/technology-items.service/technology-items.service';
import { TECHNOLOGY_ITEMS } from '../mock-data/technology-items';

describe('Integration: TechnologyItemCard and TechnologyItemDetails', () => {
  let fixture: ComponentFixture<TechnologyItemCard>;
  let location: Location;

  const mockItem = TECHNOLOGY_ITEMS[0];

  const technologyItemsServiceMock = {
    getItemById: (id: string) => of(mockItem)
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TechnologyItemCard,
        TechnologyItemDetails,
        RouterTestingModule.withRoutes([
          {
            path: 'TechnologyItems/:id',
            component: TechnologyItemDetails
          }
        ])
      ],
      providers: [
        { provide: TechnologyItemsService, useValue: technologyItemsServiceMock }
      ]
    }).compileComponents();

    location = TestBed.inject(Location);

    fixture = TestBed.createComponent(TechnologyItemCard);
    fixture.componentInstance.item = mockItem as any;
    fixture.detectChanges();
  });

  it('should navigate from card to details and display item', fakeAsync(() => {
    const button: HTMLAnchorElement =
      fixture.nativeElement.querySelector('a.btn-warning');
    button.click();
    tick();
    expect(location.path()).toBe('/TechnologyItems/1');

    const detailsFixture =
      TestBed.createComponent(TechnologyItemDetails);
    detailsFixture.detectChanges();

    const compiled = detailsFixture.nativeElement as HTMLElement;

    expect(compiled.textContent).toContain(mockItem.name);
    expect(compiled.textContent).toContain(mockItem.type);
  }));
});
