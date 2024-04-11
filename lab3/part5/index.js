// Task 5.2.1
function getProperty(obj, prop) {
    console.log(obj[prop]);
  }
  
  // Task 5.2.2
  function addProperty(obj, prop, value) {
    obj[prop] = value;
    console.log(obj[prop]);
  }
  
  // Task 5.2.3
  function removeProperty(obj, prop) {
    if (prop in obj) {
      delete obj[prop];
      console.log(true);
    } else {
      console.log(false);
    }
  }
  
  // Task 5.2.4
  function getFullName(obj) {
    console.log(obj.firstName + ' ' + obj.lastName);
  }
  
  // Task 5.2.5
  function getLengthOfWord(word) {
    console.log(word.length);
  }
  
  // Task 5.2.6
  function getLengthOfTwoWords(word1, word2) {
    console.log(word1.length + word2.length);
  }
  
  // Task 5.2.8
  function isEven(num) {
    console.log(num % 2 === 0);
  }
  
  // Task 5.2.7
  function isGreaterThan(num, threshold) {
    console.log(num > threshold);
  }
  
  // Task 5.2.9
  function isSameLength(word1, word2) {
    console.log(word1.length === word2.length);
  }
  
  // Task 5.2.10
  function isEvenAndGreaterThanTen(num) {
    console.log(num % 2 === 0 && num > 10);
  }
  
  // Task 5.2.11
  function computeAreaOfATriangle(height, base) {
    console.log(0.5 * height * base);
  }
  
  // Example usage
  var obj = {
    firstName: 'John',
    lastName: 'Doe'
  };
  
  getProperty(obj, 'firstName');
  addProperty(obj, 'age', 35);
  removeProperty(obj, 'age');
  getFullName(obj);
  getLengthOfWord('Hello');
  getLengthOfTwoWords('Hello', 'World');
  isEven(10);
  isGreaterThan(15, 10);
  isSameLength('Hello', 'World');
  isEvenAndGreaterThanTen(12);
  computeAreaOfATriangle(5, 10);


  window.alert("Сума чисел 5+9 дорівнює " + (5 + 9));
