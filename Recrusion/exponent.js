function expo(num, pow) {
  if (pow < 1) return 1;
  return num * expo(num, pow - 1);
}
console.log(expo(2, 2));
