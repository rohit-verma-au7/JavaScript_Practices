const arr = [2, 8, 1, 9, 3, 6];

function sort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sort = i;
    for (let j = i - 1; j < arr.lenght; j++) {
      console.log('I :', arr[i], 'J :', arr[j]);
    }
  }
}
sort(arr);
