// Your code here
function mapToNegativize(sourceArray){
  const result = [];
  sourceArray.forEach(elem => result.push(elem * -1));
  return result;
}
function mapToNoChange(sourceArray){
  const result = [];
  sourceArray.forEach(elem => result.push(elem ));
  return result;
}
function mapToDouble(sourceArray){
  const result = [];
  sourceArray.forEach(elem => result.push(elem * 2));
  return result;
}
function mapToSquare(sourceArray){
  const result = [];
  sourceArray.forEach(elem => result.push(elem * elem));
  return result;
}

function reduceToTotal(sourceArray, startingPoint){

  let result = 0;
  if(startingPoint === undefined){
    result = 0;
  }else{
    result+= startingPoint;
  }

  sourceArray.forEach(elem => result += elem);
  return result;
}

function reduceToAllTrue(sourceArray){
  let result = true;
  sourceArray.forEach(elem => {
    result = elem && result
  })
  return result;
}

function reduceToAnyTrue(sourceArray){
  let result = false;
  sourceArray.forEach(elem => {
    result = elem || result
  })
  return result;
}
