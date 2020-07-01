// Your code here

function mapToNegativize(sourceArray){
    let s=[]
    for(let i = 0; i<sourceArray.length; i++){
      s.push(-1*sourceArray[i])
    }
    return s
  }

function mapToNoChange(sourceArray){
  let s=[]
  for(let i = 0; i<sourceArray.length; i++){
    s.push(sourceArray[i])
  }
  return s
}
function mapToDouble(sourceArray){
  let s=[]
  for(let i = 0; i<sourceArray.length; i++){
    s.push(2*sourceArray[i])
  }
  return s
}
function mapToSquare(sourceArray){
  let s=[]
  for(let i = 0; i<sourceArray.length; i++){
    s.push(sourceArray[i]*sourceArray[i])
  }
  return s
}
////////////////////////////////////
function reduceToTotal(sourceArray, startingPoint = 0){
let total = startingPoint
for (let i = 0; i < sourceArray.length; i++) {
  total = total + sourceArray[i]
}
return total
}
function reduceToAllTrue(sourceArray){
for (let i = 0; i < sourceArray.length; i++) {
  if (!sourceArray[i]) return false
}
return true
}
function reduceToAnyTrue(sourceArray){
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) return true
  }
  return false
}
