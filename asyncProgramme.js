// Write a function which add 2 numbers asynroniously, and send result after 5 secs
let c;
setTimeout((a, b) => {
  c = a + b;
  return c;
}, 5000);
console.log((2, 2), c);
