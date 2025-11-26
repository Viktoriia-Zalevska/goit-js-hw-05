//Код стрілочної функції, яка перейматиме два параметри: масив об’єктів користувачів та ім’я друга для пошуку.
const getUsersWithFriend = (users, friendName) =>
  users.filter((user) => user.friends.includes(friendName));
//Функція повинна повертати масив об’єктів користувачів, у яких є друг з ім’ям, що передається другому параметру.

//Приклад виклику функції:

const users = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace"],
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace"],
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Foutz", "Sharron Pace"],
  },
  {
    name: "Elma Head",
    friends: ["Marilyn Foutz", "Sharron Pace", "Kelly Bell"],
  },
  {
    name: "Carey Barr",
    friends: ["Marilyn Foutz", "Sharron Pace", "Kelly Bell"],
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Sharron Pace"],
  },
  {
    name: "Sheree Anthony",
    friends: ["Jacklyn Lucas", "Sharron Pace"],
  },
];

console.log(getUsersWithFriend(users, "Sharron Pace"));
/*
[
  { name: 'Moore Hensley', friends: [ 'Sharron Pace' ] },
  { name: 'Sharlene Bush', friends: [ 'Briana Decker', 'Sharron Pace' ] },
  { name: 'Ross Vazquez', friends: [ 'Marilyn Foutz', 'Sharron Pace' ] },
  { name: 'Elma Head', friends: [ 'Marilyn Foutz', 'Sharron Pace', 'Kelly Bell' ] },
  { name: 'Carey Barr', friends: [ 'Marilyn Foutz', 'Sharron Pace', 'Kelly Bell' ] },
  { name: 'Blackburn Dotson', friends: [ 'Jacklyn Lucas', 'Sharron Pace' ] },
  { name: 'Sheree Anthony', friends: [ 'Jacklyn Lucas', 'Sharron Pace' ] }
]
*/

console.log(getUsersWithFriend(users, "Marilyn Foutz"));
/*
[
  { name: 'Ross Vazquez', friends: [ 'Marilyn Foutz', 'Sharron Pace' ] },
  { name: 'Elma Head', friends: [ 'Marilyn Foutz', 'Sharron Pace', 'Kelly Bell' ] },
  { name: 'Carey Barr', friends: [ 'Marilyn Foutz', 'Sharron Pace', 'Kelly Bell' ] }
]
*/

console.log(getUsersWithFriend(users, "Goldie Gentry")); // []
