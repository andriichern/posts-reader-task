import { sortOrder, lexicalSort, numericSort } from './sorting';

const testNumbers = [2, 5, 3, 8, 4];
const testStrings = ['is', 'as', 'note', 'off'];
const testBooleans = [true, false, true, false];
const date1 = new Date(new Date().setMonth(3));
const date2 = new Date(new Date().setMonth(5));

describe('sorting service', () => {
  describe('lexicalSort should sort', () => {
    describe('without key', () => {
      test('strings asc', () => {
        const result = testStrings.sort(lexicalSort());

        expect(result).toHaveLength(testStrings.length);
        expect(result).toEqual(['as', 'is', 'note', 'off']);
      });

      test('strings desc', () => {
        const result = testStrings.sort(lexicalSort(sortOrder.DESC));

        expect(result).toHaveLength(testStrings.length);
        expect(result).toEqual(['off', 'note', 'is', 'as']);
      });

      test('booleans asc', () => {
        const result = testBooleans.sort(lexicalSort());

        expect(result).toHaveLength(testBooleans.length);
        expect(result).toEqual([false, false, true, true]);
      });

      test('booleans desc', () => {
        const result = testBooleans.sort(lexicalSort(sortOrder.DESC));

        expect(result).toHaveLength(testBooleans.length);
        expect(result).toEqual([true, true, false, false]);
      });
    });
  });

  describe('numericSort should sort', () => {
    describe('without key', () => {
      test('numbers asc', () => {
        const result = testNumbers.sort(numericSort());

        expect(result).toHaveLength(testNumbers.length);
        expect(result).toEqual([2, 3, 4, 5, 8]);
      });

      test('numbers desc', () => {
        const result = testNumbers.sort(numericSort(sortOrder.DESC));

        expect(result).toHaveLength(testNumbers.length);
        expect(result).toEqual([8, 5, 4, 3, 2]);
      });

      test('dates asc', () => {
        const result = [date2, date1].sort(numericSort());

        expect(result).toHaveLength(2);
        expect(result).toEqual([date1, date2]);
      });

      test('dates desc', () => {
        const result = [date1, date2].sort(numericSort(sortOrder.DESC));

        expect(result).toHaveLength(2);
        expect(result).toEqual([date2, date1]);
      });
    });
  });
});
