function calcAverageCalories(days) {
  // 1. Перевіряємо, чи масив не порожній.
  // Якщо днів немає, повертаємо 0, щоб уникнути ділення на нуль.
  const daysCount = days.length;
  if (daysCount === 0) {
    return 0;
  }

  // 2. Змінна для накопичення суми калорій
  let totalCalories = 0;

  // 3. Проходимо по кожному об'єкту (дню) в масиві
  for (const day of days) {
    totalCalories += day.calories;
  }

  // 4. Повертаємо середнє значення 
  return totalCalories / daysCount;
}


// Перевірка роботи функції 
console.log(
  calcAverageCalories([
    { day: "monday", calories: 3010 },
    { day: "tuesday", calories: 3200 },
    { day: "wednesday", calories: 3120 },
    { day: "thursday", calories: 2900 },
    { day: "friday", calories: 3450 },
    { day: "saturday", calories: 3280 },
    { day: "sunday", calories: 3300 }
  ])
); 
console.log(
  calcAverageCalories([
    { day: "monday", calories: 2040 },
    { day: "tuesday", calories: 2270 },
    { day: "wednesday", calories: 2420 },
    { day: "thursday", calories: 1900 },
    { day: "friday", calories: 2370 },
    { day: "saturday", calories: 2280 },
    { day: "sunday", calories: 2610 }
  ])
); 

console.log(
  calcAverageCalories([])
); 