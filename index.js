// Your code here
function mapToNegativize(sourceArray) {
  let newArr = []
  sourceArray.forEach(item => {
    newArr.push(item * -1)
  })
  return newArr
}

function mapToNoChange(sourceArray) {
  let newArr = [...sourceArray]
  return newArr
}

function mapToDouble(sourceArray) {
  let newArr = []
  sourceArray.forEach(item => {
    newArr.push(item * 2)
  })
  return newArr
}

function mapToSquare(sourceArray) {
  let newArr = []
  sourceArray.forEach(item => {
    newArr.push(item ** 2)
  })
  return newArr
}

function reduceToTotal(sourceArray, startingPoint) {
  if (!startingPoint) {
    startingPoint = 0;
  }
  let total = startingPoint;
  sourceArray.forEach(item => {
    total += item
  })
  return total
}

function reduceToAllTrue(sourceArray) {
  let truthy = true;
  sourceArray.forEach(item => {
    if(!item) {
      truthy = false;
      return;
    }
  })
  return truthy
}

function reduceToAnyTrue(sourceArray) {
  let truthy = false;
  sourceArray.forEach(item => {
    if(item) {
      truthy = true;
      return;
    }
  })
  return truthy
}