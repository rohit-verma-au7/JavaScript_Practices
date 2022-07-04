//  Palindrome Checking

var pal = 'mom';
var jkeliye = '';
for (let j = pal.length - 1; j >= 0; j--) {
  jkeliye = jkeliye + pal[j];
}
if (pal === jkeliye) {
  console.log('Plalindrome');
} else {
  console.log('Not Palindrome');
}
