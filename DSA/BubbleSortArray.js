// Write a programme to push random number in an array and then sort it through Bubble Sort
var arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100000));
}
console.log('Random array generated');

//Bubble Sort
function bubbleSort(arr) {
  const date1 = new Date();
  console.log('starting time', date1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log(bubbleSort(arr));
const date2 = new Date();
console.log('Sorting Time', date2);
