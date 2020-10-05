// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x*y;
}

// Write a function that returns whether a given number is even
function isEven(num) {
  return num%2 === 0;
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  return Math.max(a,b);
}

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  return Math.max(a,b,c);
}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  return numbers.reduce((acc,num)=>{
    return acc + num;
  },0);
}

// Return the largest number of a non-empty array
function maxOfArray(numbers) {
  return numbers.reduce((acc,num)=>{
    return acc > num ? acc : num;
  },0);
}

// Return the longest string in an array
function longestString(strings) {
  return strings.reduce((acc,string)=>{
    return string.length > acc.length ? string : acc;
  });
}

// Return whether a word is in an array
function doesWordExist(wordsArr, word) {
  let result = false;
  wordsArr.forEach(w=>{
    w === word ? result = true : null;
  });
  return result;
}

// Finding the first non-duplicate (non-repeating) word in an array
function findUnique(wordsArr) {
  return wordsArr.length ?  wordsArr.filter((word, index)=>{
    return wordsArr.slice(index+1).indexOf(word) === -1 && wordsArr.slice(0, index).indexOf(word) === -1;
  })[0] : false;
}
// Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
function getFullName(personObj) {
  return personObj.firstName + ' ' + personObj.lastName;
}

// Return the largest number in a two dimensional array
function maxTwoDimArray(matrix) {
  return matrix.map(array=>{
    return array.reduce((acc,num)=>{
      return acc > num ? acc : num;
    },0);
  }).reduce((acc,num)=>{
      return acc > num ? acc : num;
    },0);
}
