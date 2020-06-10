// Your code here

const arr = [1, 2, 3, -9];

console.log('orginal', arr);

function mapToNegativize(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(-sourceArray[i]);
  }
  return newArr;
}

function mapToNoChange(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i]);
  }
  return newArr;
}

function mapToDouble(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] * 2);
  }
  return newArr;
}

function mapToSquare(sourceArray) {
  let newArr = [];
  for (let i = 0; i < sourceArray.length; i++) {
    newArr.push(sourceArray[i] * sourceArray[i]);
    // if (sourceArray[i] < 0) {
    //   newArr.push(sourceArray[i] * -sourceArray[i]);
    // } else if (sourceArray[i] > 0) {
    //   newArr.push(sourceArray[i] * sourceArray[i]);
    // }
  }

  return newArr;
}

console.log(mapToNegativize(arr));
console.log(mapToNoChange(arr));
console.log(mapToDouble(arr));
console.log(mapToSquare(arr));

console.log('-------------------');

function reduceToTotal(sourceArray, startingPoint = 0) {
  let sum = startingPoint;
  for (let i = 0; i < sourceArray.length; i++) {
    sum += sourceArray[i];
  }
  return sum;
}

console.log(reduceToTotal([1, 2, 3]));
console.log(reduceToTotal([1, 2, 3], 100));

function reduceToAllTrue(sourceArray) {
  return sourceArray.every(ele => {
    if (ele) return true;
  });
}
function reduceToAnyTrue(sourceArray) {
  return sourceArray.some(ele => {
    if (ele) return true;
  });
}

console.log(reduceToAllTrue([1, 2, true, 'razmatazz', true]));
console.log(reduceToAnyTrue([false, null, null, null, true]));
