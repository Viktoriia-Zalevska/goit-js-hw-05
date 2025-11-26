//Функція повертатaє масив усіх користувачів, відсортованих за спаданням кількостій їх друзів (властивість friends).
const sortByDescendingFriendCount = (users) =>
  [...users].sort(
    (firstUser, secondUser) =>
      secondUser.friends.length - firstUser.friends.length
  );
//Приклад виклику функції:
const sortByDescendingFriendCount = (users) =>
  [...users].sort(
    (firstUser, secondUser) =>
      secondUser.friends.length - firstUser.friends.length
  );

const users = [
  {
    name: "Moore Hensley",
    friends: ["Sharron Pace", "Boyle Dunn"], // 2
  },
  {
    name: "Sharlene Bush",
    friends: ["Briana Decker", "Sharron Pace", "Sheree Anthony"], // 3
  },
  {
    name: "Ross Vazquez",
    friends: ["Marilyn Foutz", "Sharron Pace", "Kelly Bell", "Elma Head"], // 4
  },
  {
    name: "Elma Head",
    friends: ["Marilyn Foutz", "Sharron Pace", "Kelly Bell"], // 3
  },
  {
    name: "Carey Barr",
    friends: ["Marilyn Foutz", "Sharron Pace"], // 2
  },
  {
    name: "Blackburn Dotson",
    friends: ["Jacklyn Lucas", "Sharron Pace"], // 2
  },
  {
    name: "Sheree Anthony",
    friends: ["Jacklyn Lucas", "Sharron Pace", "Elma Head", "Moore Hensley"], // 4
  },
];

console.log(sortByDescendingFriendCount(users));
/*
[
  { name: 'Ross Vazquez', friends: [ 'Marilyn Foutz', 'Sharron Pace', 'Kelly Bell', 'Elma Head' ] }, // 4
  { name: 'Sheree Anthony', friends: [ 'Jacklyn Lucas', 'Sharron Pace', 'Elma Head', 'Moore Hensley' ] }, // 4
  { name: 'Sharlene Bush', friends: [ 'Briana Decker', 'Sharron Pace', 'Sheree Anthony' ] }, // 3
  { name: 'Elma Head', friends: [ 'Marilyn Foutz', 'Sharron Pace', 'Kelly Bell' ] }, // 3
  { name: 'Moore Hensley', friends: [ 'Sharron Pace', 'Boyle Dunn' ] }, // 2
  { name: 'Carey Barr', friends: [ 'Marilyn Foutz', 'Sharron Pace' ] }, // 2
  { name: 'Blackburn Dotson', friends: [ 'Jacklyn Lucas', 'Sharron Pace' ] } // 2
]
*/

console.log(users); // Перевірка імутабельності (вихідний масив не змінений)
