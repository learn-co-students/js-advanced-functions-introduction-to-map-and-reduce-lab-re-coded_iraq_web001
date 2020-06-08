// Your code here
function mapToNegativize(sourceArray) {
  let newArr = [];
  sourceArray.forEach(elem => {
    newArr.push(elem * -1);
  });

  return newArr;
}
function mapToNoChange(sourceArray){
  let newArr = [];
  sourceArray.forEach(elem => {
    newArr.push(elem );
  });

  return newArr;

}
function mapToDouble(sourceArray){
  let newArr = [];
  sourceArray.forEach(elem => {
    newArr.push(elem *2);
  });

  return newArr;

}
function mapToSquare(sourceArray){
  let newArr = [];
  sourceArray.forEach(elem => {
    newArr.push(elem **2);
  });

  return newArr;

}
function reduceToTotal(sourceArray,startingPoint=0){

  sourceArray.forEach(element => {
    return startingPoint+=element ;

  });
return startingPoint

}
function reduceToAllTrue(sourceArray){

  let state = true;
  sourceArray.forEach(elem=>{
  if(!elem){

    state= false;
    return
  }

  })
  return state
}
function reduceToAnyTrue(sourceArray){

  let state = false;
  sourceArray.forEach(elem=>{
  if(elem){

    state= true;
    return
  }

  })
  return state
}
