function addUptoN(num) {
  if (num <= 0) {
    return 1;
  } else {
    return num + addUptoN(num - 1);
  }
}
console.log(addUptoN(50));
