const arr = [1, 2, 3, 4, 5, 6];
let result = [];
function oddValues(arr) {
  if (arr.length === 0) {
    return;
  }
  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }
  oddValues(arr.slice(1));
}
oddValues(arr);
console.log(result);
