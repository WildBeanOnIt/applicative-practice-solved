/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  // Your code goes here...
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
  let obj = {};
  for (const asteroid of data.asteroids) {
    if (obj[asteroid.discoveryYear]) {
      obj[asteroid.discoveryYear] += 1;
    } else {
      obj[asteroid.discoveryYear] = 1;
    }
  }
  let highestNum = Math.max(...Object.values(obj));
  return parseFloat(getKeyByValue(obj, highestNum));
}

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
