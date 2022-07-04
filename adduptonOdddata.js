// find out odd number upto given number, add odd numbers together and console result
const n = 5;
var arr = [];
var oddAdd = 0;
for (let i = 0; i <= n; i++) {
  if (i % 2 !== 0) {
    arr.push(i);
    oddAdd = oddAdd + i;
    // console.log('array', arr);
  }
}
// console.log('array', arr);
console.log('add : ', oddAdd);

// Add all odd numbers in an Array
var arr = [2, 5, 3];
// var arr1 = [4, 5, 2, 6, 12, 34, 59, 39];
var result = 0;
arr.forEach((value) => {
  if (value % 2 !== 0) {
    result = result + value;
  }
});
console.log(result);
