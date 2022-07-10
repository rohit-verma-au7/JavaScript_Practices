// const arr1 = n;
let arr = [];
for (let k = 0; k < 1000000; k++) {
  arr.push(Math.round(Math.random() * 1000000));
}
console.log(new Date());
// console.log(arr);

function selectionsort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    let minValue;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        minValue = j;
        [arr[minValue], arr[min]] = [arr[min], arr[minValue]];
      }
    }
  }
  // return arr;
}
console.log(selectionsort(arr));
console.log(new Date());
