let num=[1,2,3];
let doubled= num.map(number=> number*2);
console.log(doubled);

let usernames = ['user1', 'user2'];
let testUsers = usernames.map(u => ({ username: u, password: 'Test@123' }));
console.log(testUsers);