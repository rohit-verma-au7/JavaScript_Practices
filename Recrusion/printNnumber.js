function countdown(num) {
  if (num < 0) {
    console.log('All done');
    // return
  } else {
    console.log(num);
    num--;
    countdown(num);
  }
}
countdown(10);
