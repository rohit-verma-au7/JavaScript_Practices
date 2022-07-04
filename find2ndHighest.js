// 1st Method
// fInd the 2nd highest element in an array
var arr = [2, 6, 55, 9, 12]; //[9,200,626,5589]
var result = arr[0]; // [200 , 626]
function myFunc(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > result) {
      result = arr[i];
    }
  }
  //for loop{}
}
myFunc(arr);
console.log(arr);
console.log(result);

// 2nd method
// function sortArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[j] > arr[j + 1]) {
//         var c = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = c;
//       }
//     }
//   }
//   console.log('array', arr);
//   console.log(arr[arr.length - 2]);
// }
// sortArray(arr);

// 3rd method
// var arr = [12, 35, 1, 10,1, 56 , 1 , 57]// 1 1 10 12 35
// var arrr = []
// arrr = arr.sort((a,b)=>a-b)
// console.log(arrr)
// console.log(arrr[arrr.length-2])//
