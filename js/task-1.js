function isEnoughCapacity(products, containerSize) {
  // 1. Змінна для збереження загальної кількості товарів
  let totalQuantity = 0;

  // 2. Отримуємо масив значень (кількості) з об'єкта products
  const quantities = Object.values(products);

  // 3. Проходимо по масиву та додаємо кожне число до загальної суми
  for (const amount of quantities) {
    totalQuantity += amount;
  }

  // 4. Повертаємо true, якщо сума менша або дорівнює containerSize, інакше false
  return totalQuantity <= containerSize;
}

// Перевірка роботи функції 
console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); 

console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); 
console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)
); 
console.log(
  isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)
); 