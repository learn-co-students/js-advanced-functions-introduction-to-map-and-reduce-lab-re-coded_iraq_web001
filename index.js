function mapToNegativize(sourceArray){
  let newArr = [];
  sourceArray.forEach(element => {
    newArr.push(element * -1);
  });
  return newArr;
}

function mapToNoChange(sourceArray){
  let newArr = [...sourceArray];
  return newArr;
}

function mapToDouble(sourceArray){
  let newArr = [];
  sourceArray.forEach(element => {
    newArr.push(element * 2);
  });
  return newArr;
}

function mapToSquare(sourceArray){
  let newArr = [];
  sourceArray.forEach(element => {
    newArr.push(element ** 2);
  });
  return newArr;
}

function reduceToTotal(sourceArray, startingPoint = 0){
  let total = startingPoint;
  sourceArray.forEach(element => {
    total += element;
  });
  return total;
}

function reduceToAllTrue(sourceArray){
  let boolean = true;
  sourceArray.forEach(element => {
    if(!element){
      boolean = false;
      return ;
    }
  });
  return boolean;
}

function reduceToAnyTrue(sourceArray){
  let boolean = false;
  sourceArray.forEach(element => {
    if(element){
      boolean = true;
      return ;
    }
  });
  return boolean;
}