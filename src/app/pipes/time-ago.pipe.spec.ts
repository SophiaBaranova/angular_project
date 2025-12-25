import { TimeAgoPipe } from './time-ago.pipe';
import moment from 'moment';

describe('TimeAgoPipe', () => {
  let pipe: TimeAgoPipe;

  beforeEach(() => {
    pipe = new TimeAgoPipe();
  });

  it('should create', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format date with "time ago"', () => {
    const date = new Date();
    const expectedFormattedDate = moment(date).format('MMMM DD, YYYY');
    const expectedAgo = moment(date).fromNow();

    const result = pipe.transform(date);

    expect(result).toContain(expectedFormattedDate);
    expect(result).toContain(expectedAgo);
  });

  it('should return empty string for null value', () => {
    expect(pipe.transform(null as any)).toBe('');
  });

  it('should return empty string for undefined value', () => {
    expect(pipe.transform(undefined as any)).toBe('');
  });

  it('should return empty string for invalid date', () => {
    expect(pipe.transform('not-a-date')).toBe('');
  });

  it('should accept string date input', () => {
    const dateString = '2024-01-01';
    const result = pipe.transform(dateString);

    expect(result).toContain(moment(dateString).format('MMMM DD, YYYY'));
  });
});
