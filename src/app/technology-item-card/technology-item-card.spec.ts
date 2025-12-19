import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TechnologyItemCard } from './technology-item-card';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { TECHNOLOGY_ITEMS } from '../mock-data/technology-items';

describe('TechnologyItemCard', () => {
  let component: TechnologyItemCard;
  let fixture: ComponentFixture<TechnologyItemCard>;

  const mockItem = TECHNOLOGY_ITEMS[0];
  mockItem.lastUpdated = new Date().toISOString(); // To ensure isNew() === true

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TechnologyItemCard,
        RouterTestingModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TechnologyItemCard);
    component = fixture.componentInstance;

    component.item = mockItem as any;
    component.isRecommended = true;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render item name', () => {
    const title = fixture.debugElement.query(By.css('h5')).nativeElement;
    expect(title.textContent).toContain(mockItem.name);
  });

  it('should render type and side', () => {
    const text = fixture.debugElement.query(By.css('.card-text')).nativeElement;
    expect(text.textContent).toContain(mockItem.type);
    expect(text.textContent).toContain(mockItem.side);
  });

  it('should render author', () => {
    const author = fixture.debugElement.query(By.css('small')).nativeElement;
    expect(author.textContent).toContain(mockItem.author);
  });

  it('should render logo image', () => {
    const img = fixture.debugElement.query(By.css('img')).nativeElement;
    expect(img.src).toContain(mockItem.logo);
  });

  it('should show "New!" badge for new item', () => {
    const badge = fixture.debugElement.query(By.css('.badge'));
    expect(badge).toBeTruthy();
    expect(badge.nativeElement.textContent).toContain('New!');
  });

  it('should show "Recommended for you" header', () => {
    const header = fixture.debugElement.query(By.css('.card-header'));
    expect(header).toBeTruthy();
    expect(header.nativeElement.textContent).toContain('Recommended for you');
  });

  it('should render official site link', () => {
    const link = fixture.debugElement.query(By.css('a.btn-primary')).nativeElement;
    expect(link.href).toBe(mockItem.officialSite);
  });
});
