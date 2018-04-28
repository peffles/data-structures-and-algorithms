'use strict';

function reverseArray(arr) {
  const arrReversed = [];
  let length = 4;
  for (let i = 0; i < length; i++) {
    const index = arr.pop();
    arrReversed.push(index);
  }
  return arrReversed;
}

reverseArray([1, 2, 3, 4]);