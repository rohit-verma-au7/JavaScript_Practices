//Question Number 4
const prices = [7, 1, 5, 3, 6, 4];
let result;
for (let i = 0; i < prices.length; i++) {
  for (let j = 1; j <= i + 1; j++) {
    console.log('I', prices[i]);
    // console.log('J', j);
  }
}
