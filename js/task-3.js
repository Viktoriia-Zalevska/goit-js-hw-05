const profile = {
  username: "Jacob",
  playTime: 300,

  // Метод 1: Змінює ім'я користувача
  changeUsername(newName) {
    this.username = newName;
  },

  // Метод 2: Оновлює час у грі (додає години до поточного значення)
  updatePlayTime(hours) {
    this.playTime += hours;
  },

  // Метод 3: Повертає рядок з інформацією
  getInfo() {
    return `${this.username} has ${this.playTime} active hours!`;
  }
};


// Перевірка роботи методів
console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"