import { TestBed } from '@angular/core/testing';
import { TechnologyItemsService } from './technology-items.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TECHNOLOGY_ITEMS } from '../../mock-data/technology-items';

describe('TechnologyItemsService', () => {
  let service: TechnologyItemsService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TechnologyItemsService]
    });

    service = TestBed.inject(TechnologyItemsService);
    httpTestingController = TestBed.inject(HttpTestingController);

    // Mock the initial GET call from loadItems() in constructor
    const req = httpTestingController.expectOne('items.json');
    expect(req.request.method).toBe('GET');

    // Simulate response
    const responseData: Record<string, any> = {};
    TECHNOLOGY_ITEMS.forEach(item => {
      const { id, ...rest } = item;
      responseData[id] = rest;
    });
    req.flush(responseData);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should retrieve item by ID from items$', () => {
    service.getItemById('1').subscribe(item => {
      const expected = { ...TECHNOLOGY_ITEMS[0], logo: 'assets/' + TECHNOLOGY_ITEMS[0].logo };
      expect(item).toEqual(expected);
    });
  });
});
