// Bubble Sort
// 1st Logic
const arr1 = [9, 6, 5, 7, 5, 65, 89, 56]; //[5,6,7,9]
function bubbleSort(arr1) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      let temp;
      if (arr1[j] > arr1[j + 1]) {
        temp = arr1[j + 1];
        arr1[j + 1] = arr1[j];
        arr1[j] = temp;
      }
    }
  }
  return arr1;
}
console.log(bubbleSort(arr1));

//2nd logic
// const arr = [9, 8, 1, 11, 12]; //[5,6,7,9]
// function bubbleSort(arr) {
//   for (let i = arr.length - 1; i > 0; i--) {
//     let flag = false; // If array is half sorted then loop will break after sorting
//     for (let j = 0; j < i; j++) {
//       // console.log(arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j + 1];
//         arr[j + 1] = arr[j];
//         arr[j] = temp;
//         console.log(flag);
//         flag = true;
//       }
//     }
//     if (flag === false) {
//       break;
//     }
//   }
//   return arr;
// }
// console.log(bubbleSort(arr));
