import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologyItemForm } from './technology-item-form';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

describe('TechnologyItemForm', () => {
  let component: TechnologyItemForm;
  let fixture: ComponentFixture<TechnologyItemForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TechnologyItemForm,
        HttpClientTestingModule,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyItemForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
