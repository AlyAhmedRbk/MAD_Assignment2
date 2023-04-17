const arr = [1, 2, 3];
arr.push(4);
console.log(arr);


const arr1 = [1, 2, 3];
const removedElement = arr.pop();
console.log(arr); // [1, 2]
console.log(removedElement);

const arr2 = [1, 2, 3];
const removedElements = arr.shift();
console.log(arr); // [2, 3]
console.log(removedElement);


const arr3 = [1, 2, 3];
arr.unshift(0);
console.log(arr);

const arr4 = [1, 2, 3];
arr.splice(1, 1, 4, 5); // remove 1 element starting from index 1 and add 4 and 5
console.log(arr); 

const arr5 = [1, 2, 3, 4, 5];
const slicedArr = arr.slice(1, 4); // start at index 1 and end at index 3 (not included)
console.log(slicedArr); 

const arr6 = [1, 2, 3];
arr.forEach(function(item, index, array) {
  console.log(item, index, array);
});

const arr7 = [1, 2, 3];
const mappedArr = arr.map(function(item) {
  return item * 2;
});
console.log(mappedArr);

const arr8 = [1, 2, 3, 4, 5];
const sum = arr.reduce(function(acc, item) {
  return acc + item;
}, 0);
console.log(sum);


const arr9 = [1, 2, 3, 4, 5];
const filteredArr = arr.filter(function(item) {
  return item % 2 === 0;
});
console.log(filteredArr);