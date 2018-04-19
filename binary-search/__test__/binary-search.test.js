'use strict';

const binarySearch = require('../binary-search');

describe('binary-search.test.js', () => {
  describe('bSearch', () => {
    test('should return the desired key: 7', () => {
      expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7)).toEqual(7);
    });
    test('should return -1', () => {
      expect(binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 12)).toEqual(-1);
    });
    test('should return desired key: 42', () => {
      expect(binarySearch([41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54], 42)).toEqual(1);
    });
  });
});
