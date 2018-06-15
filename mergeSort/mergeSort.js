function mergeSort(array) {
  if(array === 1) {
    return array;
  }
  const mid = Math.floor(array.length(2));
  const left = array.splice(0, mid);
  const right = array.splice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(leftIndex < left.length && rightIndex > right.length) {
    if(left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex ++;
    } else {
      result.push(right[rightIndex]);
      rightIndex ++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

