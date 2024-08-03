document.addEventListener("DOMContentLoaded", () => {
  const loaderText = document.getElementById("loader-text");
  const numbers = generateOrderedNumbers(15, [97, 98, 99]);
  let index = 0;
  const duration = 2000; // 5 seconds
  const stepTime = duration / numbers.length; // Time between updates

  function updateLoader() {
      if (index < numbers.length) {
          loaderText.textContent = numbers[index];
          index++;
          setTimeout(updateLoader, stepTime);
      }
  }

  updateLoader();
});

function generateOrderedNumbers(count, includeNumbers) {
  const numbers = new Set();

  // Generate random numbers, ensuring no duplicates and below 100
  while (numbers.size < count - includeNumbers.length) {
      let num = Math.floor(Math.random() * 97); // Random number between 0 and 96
      numbers.add(num);
  }

  // Add the specific numbers 97, 98, 99 and sort them
  includeNumbers.forEach(num => numbers.add(num));
  return Array.from(numbers).sort((a, b) => a - b);
}