import { filterWithKey } from './filter';

const KEY = 'key';
const TEST = 'test';
const testData = [
  {
    [KEY]: KEY,
  },
  {
    [TEST]: TEST,
  },
];

describe('filter util', () => {
  describe('should return empty array', () => {
    test('for undefined array', () => {
      const result = filterWithKey(undefined, TEST, KEY);

      expect(result).toHaveLength(0);
    });

    test('for undefined filter', () => {
      const result = filterWithKey([0, 1], undefined, KEY);

      expect(result).toHaveLength(0);
    });

    test('for undefined key', () => {
      const result = filterWithKey([0, 1], TEST);

      expect(result).toHaveLength(0);
    });

    test('for null array', () => {
      const result = filterWithKey(null, TEST, KEY);

      expect(result).toHaveLength(0);
    });

    test('for null filter', () => {
      const result = filterWithKey([0, 1], null, KEY);

      expect(result).toHaveLength(0);
    });

    test('for null key', () => {
      const result = filterWithKey([0, 1], TEST, null);

      expect(result).toHaveLength(0);
    });

    test('for empty array', () => {
      const result = filterWithKey([], TEST, KEY);

      expect(result).toHaveLength(0);
    });

    test('for empty filter', () => {
      const result = filterWithKey([0, 1], '', KEY);

      expect(result).toHaveLength(0);
    });

    test('for empty filter', () => {
      const result = filterWithKey([0, 1], TEST, '');

      expect(result).toHaveLength(0);
    });
  });

  describe('should return result filtered data', () => {
    describe('for "test" key', () => {
      test(' and "te" filter', () => {
        const result = filterWithKey(testData, 'te', TEST);

        expect(result).toHaveLength(1);
        expect(result[0]).toHaveProperty(TEST);
      });

      test(' and "ES" filter', () => {
        const result = filterWithKey(testData, 'ES', TEST);

        expect(result).toHaveLength(1);
        expect(result[0]).toHaveProperty(TEST);
      });

      test(' and "sT" filter', () => {
        const result = filterWithKey(testData, 'sT', TEST);

        expect(result).toHaveLength(1);
        expect(result[0]).toHaveProperty(TEST);
      });

      test(' and "ST" filter', () => {
        const result = filterWithKey(testData, 'ST', TEST);

        expect(result).toHaveLength(1);
        expect(result[0]).toHaveProperty(TEST);
      });
    });

    describe('for "key" key', () => {
      test(' and "ke" filter', () => {
        const result = filterWithKey(testData, 'ke', KEY);

        expect(result).toHaveLength(1);
        expect(result[0]).toHaveProperty(KEY);
      });

      test(' and "EY" filter', () => {
        const result = filterWithKey(testData, 'EY', KEY);

        expect(result).toHaveLength(1);
        expect(result[0]).toHaveProperty(KEY);
      });

      test(' and "kEy" filter', () => {
        const result = filterWithKey(testData, 'kEy', KEY);

        expect(result).toHaveLength(1);
        expect(result[0]).toHaveProperty(KEY);
      });

      test(' and "KeY" filter', () => {
        const result = filterWithKey(testData, 'KeY', KEY);

        expect(result).toHaveLength(1);
        expect(result[0]).toHaveProperty(KEY);
      });
    });
  });
});
