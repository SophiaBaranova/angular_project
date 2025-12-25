import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologyItemDetails } from './technology-item-details';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TechnologyItemDetails', () => {
  let component: TechnologyItemDetails;
  let fixture: ComponentFixture<TechnologyItemDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TechnologyItemDetails,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyItemDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
