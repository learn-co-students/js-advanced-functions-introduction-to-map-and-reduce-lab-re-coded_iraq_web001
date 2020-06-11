// Your code here
function mapToNegativize(x) {
  let arr = []
  for (let i = 0; i < x.length; i++ ) {
    arr.push(-1 * x[i])
  }
  return arr
}

function mapToNoChange(x) {
  let arr = []
  for (let i = 0; i < x.length; i++ ) {
    arr.push(x[i])
  }
  return arr
}

function mapToDouble(x) {
  let arr = []
  for (let i = 0; i < x.length; i++ ) {
    arr.push(2 * x[i])
  }
  return arr
}

function mapToSquare(x) {
  let arr = []
  for (let i = 0; i < x.length; i++ ) {
    arr.push(x[i] * x[i])
  }
  return arr
}

function reduceToTotal(x, startingPoint=0) {
  let total = startingPoint
  for (let i = 0; i < x.length; i++ ) {
    total = total + x[i]
  }
  return total
}

function reduceToAllTrue(x) {
  for (let i = 0; i < x.length; i++ ) {
    if (!x[i]) return false
  }
  return true
}

function reduceToAnyTrue(x) {
  for (let i = 0; i < x.length; i++ ) {
    if (x[i]) return true
  }
  return false
}
