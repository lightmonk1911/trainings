const sort = require('./sort');

const shouldSort = ([unsorted, sorted]) => {
  test('should return sorted', () => {
    expect(sort(unsorted)).toEqual(sorted);
  });
};

const cases = [
  [[], []],
  [[1], [1]],
  [[1, 2, 3, 10], [1, 2, 3, 10]],
  [[10, 2, 3, 10], [2, 3, 10, 10]],
  [[10, 2, 1000, 3, 10, 100], [2, 3, 10, 10, 100, 1000]],
  [[9, 100, 8, 7, 6, 5, 4, 3, 2, 1, 0], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 100]],
];

const getRandomIntegerMinMax = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const createArrayOfRandom = (length, min, max) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(getRandomIntegerMinMax(min, max));
  }
  return array;
};

describe('should sort array', () => {
  test('should return empty array', () => {
    expect(sort([])).toEqual([]);
  });

  cases.forEach(shouldSort);

  test('should sort array of random', () => {
    const unsorted = createArrayOfRandom(0, 1000000);
    const sorted = sort(unsorted);
    for (let i = 1; i < sorted.length; i++) {
      expect(sorted[i] > sorted[i - 1]);
    }
  });
});
