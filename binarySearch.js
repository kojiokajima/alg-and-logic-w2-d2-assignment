// Eduardo, Miyu, and Koji
// Write an algorithm that performs binary search on a given array.
// the function will also track, and print out the number of steps required to reach the target
// the index of the item 

let testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15, 16, 19, 24, 26, 27, 29];

const binarySearch = function (arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let middle = (left + right) / 2;
  let steps = 0;

  while (arr[middle] !== target) {
    // console.log(middle);

    if(arr[middle] < target) {
      left = middle;
    } else if(arr[middle] > target) {
      right = middle;
    } else {
      return middle;
    }
    middle = (left + right) / 2;
    steps++;
  }
  return `It's ${middle}st/nd/rd/th number and takes ${steps} steps.`;
};





console.log(binarySearch(testArray, 19));
console.log(binarySearch(testArray, 12));
console.log(binarySearch(testArray, 26));

// find the middlepoint

// let middle =

//   console.log(arr[middle]);

//loop
// if(testArry[middle] !== target) {
// }