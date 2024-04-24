//Task 1
function computeAreaOfARectangle(length, width) {
    const area1 = length * width;
    return area1;
  }

const length = 5;
const width = 10;
const area1 = computeAreaOfARectangle(length, width);
  
console.log(`1. The area of the rectangle is: ${area1}`);

//Task 2

function computeAreaOfACircle(radius) {
    const area2 = Math.PI * Math.pow(radius, 2);
    return area2;
}

const radius = 5;
const area2 = computeAreaOfACircle(radius);

console.log(`2. The area of the circle is: ${area2}`);

//Task 3

function computePower(base, exponent) {
    const result3 = Math.pow(base, exponent);
    return result3;
}

const base = 5;
const exponent = 3;
const result3 = computePower(base, exponent);

console.log(`3. ` + `${base} raised to the power of ${exponent} is: ${result3}`); 

//Task 4

function computeSquareRoot(number) {
    const squareRoot = Math.sqrt(number);
    return squareRoot;
}

const number = 25;
const squareRoot = computeSquareRoot(number);

console.log(`4. ` + `The square root of ${number} is: ${squareRoot}`);

//Task 5

function getLengthOfThreeWords(word1, word2, word3) {
    return word1.length + word2.length + word3.length;
}

const word1 = "hello";
const word2 = "world";
const word3 = "JavaScript";
const sum = getLengthOfThreeWords(word1, word2, word3);

console.log(`5. ` + `The sum of the lengths of the three words is: ${sum}`);

//Task 6

function joinArrays(array1, array2) {
    const joinedArray = array1.concat(array2);
    return joinedArray;
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const joinedArray = joinArrays(array1, array2);

console.log(`6. ` + joinedArray);

//Task 7
function getProductOfAllElementsAtProperty(obj, key) {
    if (obj.hasOwnProperty(key) && Array.isArray(obj[key])) {
      const product = obj[key].reduce((acc, val) => acc * val, 1);
      return product;
    } else {
      return 0;
    }
}

const obj = {
    numbers: [1, 2, 3, 4],
    empty: [],
    notAnArray: "not an array",
    undefinedProperty: undefined
};

console.log(`7. `);
console.log(` ` + getProductOfAllElementsAtProperty(obj, "numbers")); 
console.log(` ` + getProductOfAllElementsAtProperty(obj, "empty")); 
console.log(` ` + getProductOfAllElementsAtProperty(obj, "notAnArray")); 
console.log(` ` + getProductOfAllElementsAtProperty(obj, "undefinedProperty")); 

//Task 8

function sumDigits(num) {
    const sign = num < 0 ? -1 : 1;
    let numAbs = Math.abs(num);
    let sum = 0;
    while (numAbs > 0) {
      sum += numAbs % 10;
      numAbs = Math.floor(numAbs / 10);
    }
    return sum * sign;
}

console.log(`8. `);
console.log(` ` + sumDigits(12345));
console.log(` ` + sumDigits(-501));
console.log(` ` + sumDigits(2546));

//Task 9

function findShortestWordAmongMixedElements(arr) {
    if (arr.length === 0) {
        return "";
    }
    let shortestWord = "";
    for (let element of arr) {
        if (typeof element === 'string') {
            if (shortestWord === "" || element.length < shortestWord.length) {
                shortestWord = element;
            }
        }
    }
    return shortestWord;
}

console.log(`9. `);
console.log(` ` + findShortestWordAmongMixedElements([4, 'two', 2, "three"])); 
console.log(` ` + findShortestWordAmongMixedElements([10, 'apple', 2, 'banana', 'watermelon'])); 
console.log(` ` + findShortestWordAmongMixedElements([10, 'apple', 3, 'banana', 100, 'watermelon']));
console.log(` ` + findShortestWordAmongMixedElements([]));
console.log(` ` + findShortestWordAmongMixedElements([1, 2, 3, 4, 5]));

//Task 10

function findSmallestNumberAmongMixedElements(arr) {
    let smallestNumber = Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number' && arr[i] < smallestNumber) {
        smallestNumber = arr[i];
      }
    }
    if (smallestNumber === Infinity) {
      return '';
    }
    return smallestNumber;
}
  
console.log(`10. `);
console.log(` ` + findSmallestNumberAmongMixedElements([4, 'two', 2, "three"])); 
console.log(` ` + findSmallestNumberAmongMixedElements([10, 'apple', 2, 'banana', 'watermelon'])); 
console.log(` ` + findSmallestNumberAmongMixedElements([10, 'apple', 3, 'banana', 100, 'watermelon'])); 
console.log(` ` + findSmallestNumberAmongMixedElements([])); 
console.log(` ` + findSmallestNumberAmongMixedElements(['one', 'two', 'three'])); 

//Task 11

function modulo(num1, num2) {
    if (isNaN(num1) || isNaN(num2)) {
      return NaN;
    }
    if (num2 === 0) {
      return NaN;
    }
    const quotient = Math.floor(num1 / num2);
    const remainder = num1 - quotient * num2;
    if (num1 < 0) {
      return remainder - num2;
    } else {
      return remainder;
    }
}
  
console.log(`11. `);  
console.log(` ` + modulo(5, 2)); 
console.log(` ` + modulo(-5, 2)); 
console.log(` ` + modulo(0, 5));
console.log(` ` + modulo(5, 0)); 
console.log(` ` + modulo(NaN, 5)); 
console.log(` ` + modulo(5, NaN)); 

//Task 12

function reverseFragments(str, p) {
    if (p <= 1) {
        return str;
    }
    let result = '';
    for (let i = 0; i < str.length; i += p) {
        let fragment = str.substr(i, p);
        let reversedFragment = fragment.split('').reverse().join('');
        result += reversedFragment;
    }
    return result;
}

let inputString = "abcdefghij";
let p = 3;
let output = reverseFragments(inputString, p);

console.log(`12. ` + output);

//Task 13

function findSingleEvenOrOddNumber(str) {
    let evenCount = 0;
    let oddCount = 0;
    let singleNumber = 0;
    for (let i = 0; i < str.length; i++) {
      let num = parseInt(str[i]);
      if (isNaN(num)) continue;
  
      if (num % 2 === 0) {
        evenCount++;
        singleNumber ^= num;
      } else {
        oddCount++;
        singleNumber ^= num;
      }
    }
    if (evenCount === 1) return singleNumber;
    if (oddCount === 1) return singleNumber;
    return 0;
}

console.log(`13. `);
console.log(` ` + findSingleEvenOrOddNumber("2 4 5 6")); 
console.log(` ` + findSingleEvenOrOddNumber("1 3 4 5 7")); 
console.log(` ` + findSingleEvenOrOddNumber("1 2 3 4 5")); 
console.log(` ` + findSingleEvenOrOddNumber("2 4 6 8 0")); 
console.log(` ` + findSingleEvenOrOddNumber(""));

//Task 14

function findPairWithGivenSum(arr, sum14) {
    const nums = {};
    for (let i = 0; i < arr.length; i++) {
      const complement = sum14 - arr[i];
      if (nums[complement] !== undefined) {
        return [arr[i], complement];
      }
      nums[arr[i]] = i;
    }
    return [];
}

const arr = [1, 5, 7, -1, 5];
const sum14 = 6;

console.log(`14. ` + findPairWithGivenSum(arr, sum14));

//Task 15

function isMirrorImage(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[str2.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }

console.log(`15. `);
console.log(` ` + isMirrorImage("hello", "olleh")); 
console.log(` ` + isMirrorImage("world", "dlorw")); 

//Task 16

function binarySearch(arr16, target) {
    let left = 0;
    let right = arr16.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr16[mid] === target) {
        return mid;
      }
      if (arr16[mid] < target) {
        left = mid + 1;
      }
      else {
        right = mid - 1;
      }
    }
    return -1;
}

const arr16 = [1, 3, 5, 7, 9];

console.log(`16. ` + binarySearch(arr, 6));

//Task 17

function isIsogram(str) {
    const regex = /(.)\1/g;
    const match = regex.exec(str);
    if (match) {
      return false;
    }
    return true;
}

console.log(`17. `);
console.log(` ` + isIsogram("Subdermatoglyphic"));
console.log(` ` + isIsogram("abaa")); 

//Task 18

function findPalindromes(sentence) {
    const words = sentence.split(' ');
    const palindromes = [];
    for (let i = 0; i < words.length; i++) {
      const word = words[i].toLowerCase();
      const reversedWord = word.split('').reverse().join('');
  
      if (word === reversedWord) {
        palindromes.push(words[i]);
      }
    }
    return palindromes;
}

console.log(`18. `);
console.log(` ` + findPalindromes("racecar"));
console.log(` ` + findPalindromes("hello world"));