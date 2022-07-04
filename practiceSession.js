// const obj = [
//   {
//     id: 1,
//     name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       city: 'Gwenborough',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//         lng: '81.1496',
//       },
//     },
//     phone: '1-770-736-8031 x56442',
//     website: 'hildegard.org',
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets',
//     },
//   },
// ];
// // For removing something
// /* let result = obj.map((item) => {
//   return delete item.phone && delete item.website;
// });
// console.log(obj[0]); */

// //For adding something

class Snake {
  describe() {
    return '1';
  }
}

class Python extends Snake {
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }
  abc() {
    return this.describe();
  }
}

var cobra = new Python('rohit', 'black');
console.log(cobra);
console.log(cobra.abc());
