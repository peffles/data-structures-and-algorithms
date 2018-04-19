'use strict';

function binarySearch(arr, key) {
  let firstItem = 0;
  let lastItem = arr.length - 1;
  let mid = Math.floor((firstItem + lastItem) / 2);

  while (arr[mid] !== key && firstItem < lastItem) {
    if (key < arr[mid]) {
      lastItem = mid - 1;
    } else {
      firstItem = mid + 1;
    }
    mid = Math.floor((firstItem + lastItem) / 2);
  }
  return (arr[mid] === key) ? mid : -1;
}


module.exports = binarySearch;
