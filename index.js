// Your code here
function mapToNegativize(sourceArray){
  let newArr=[]
  sourceArray.forEach(el => {
    newArr.push(el*-1);
  })
return newArr;

}


function mapToNoChange(sourceArray){
  let newArr=[]
  sourceArray.forEach(el => {
    newArr.push(el);
  })
return newArr;


}


function mapToDouble(sourceArray){
  let newArr=[]
  sourceArray.forEach(el => {
    newArr.push(el*2);
  })
return newArr;

}


function mapToSquare(sourceArray){
  let newArr=[]
  sourceArray.forEach(el => {
    newArr.push(el**2);
  })
return newArr;

}


function reduceToTotal(sourceArray, startingPoint){
  if (!startingPoint) {
      startingPoint = 0;
    }
    let total = startingPoint;
    sourceArray.forEach(el => {
      total = total + el
    })
    return total;
}


function reduceToAllTrue(sourceArray) {
  let checkState = true;
  sourceArray.forEach(el => {
    if(!el) {
      checkState = false;
      return;
    }
  })
  return checkState
}

function reduceToAnyTrue(sourceArray) {
  let checkState = false;
  sourceArray.forEach(el => {
    if(el) {
      checkState = true;
      return;
    }
  })
  return checkState
}
