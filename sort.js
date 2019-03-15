const sort = array => {
  if (!array.length) {
    return array;
  }
  const key = array[0];
  const left = array.filter(n => n < key);
  const leftSorted = sort(left);
  const middle = array.filter(n => n === key);
  const right = array.filter(n => n > key);
  const rightSorted = sort(right);
  return [...leftSorted, ...middle, ...rightSorted];
};

module.exports = sort;

