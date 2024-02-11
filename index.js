
const firstNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
const lastNames = ["Smith", "Johnson", "Brown", "Lee", "Garcia"];

// Генерируем случайное имя
function getRandomName() {
  const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${randomFirstName} ${randomLastName}`;
}

module.exports = {
  getRandomName
};