const prices: (number | string)[] = [1, 3, 2, 2, 2, 'as'];
prices.push(1);
prices.push('1');

let user: [string, number, boolean];
// user = ['edsonv', 5];
// user = ['12', 5];

// user = [];
// user = ['nico'];
// user = ['nico', 12];
user = ['nico', 12, true];

const [username, age] = user;

console.log(username);
console.log(age);
