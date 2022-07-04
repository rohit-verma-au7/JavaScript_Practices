// // Function to check value from array and return two elements from araay if value sum is matched

var arr = [1, 21, 3, 14, 5, 60, 7, 6];
var value = 81;
var arrayValue = -1;
function myFunc(arrr, val) {
  for (let i = 0; i < arrr.length; i++) {
    // console.log('A', arrr[i]);
    for (let j = 1; j <= i + 1; j++) {
      // console.log('B', arrr[j]);
      if (arr[i] + arr[j] === val) {
        arrayValue = new Array(arr[j], arr[i]);
      }
    }
  }
}
myFunc(arr, value);
console.log(arrayValue);
