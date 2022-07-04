var arr = [1, 2, 3, 4, 5, 6];
var number = 2;
var result = -1;
for (let i = 0; i < arr.length; i++) {
  if (number === arr[i]) {
    result = i;
  }
}
console.log(result);
