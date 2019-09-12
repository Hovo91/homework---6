// Given a sorted array and an element from that array. Find the index of that
element using binary search.

function binarySearch(arr, n) {
  let arrLength = arr.length;
  let k = Math.floor(arrLength / 2);
  let start = 0;
  let end = arrLength - 1;
  while(start <= end) {
    if(arr[k] === n) {
      return k;
    }
    if(arr[k] < n) {
      start = k + 1;
      k = Math.floor((start + end) / 2);
    } else {
      end = k - 1;
      k = Math.floor((start + end) / 2);
    }
  }
}

console.log(binarySearch([1, 'a', 2, 5, 8, 10, 87, 98, 100], 'a'));
