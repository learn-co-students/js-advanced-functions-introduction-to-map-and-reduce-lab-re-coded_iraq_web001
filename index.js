// Your code here

const array = [1, 2, 3, -9]
function mapToNegativize(array){
  let arr = []
  for (let i = 0; i < array.length ;i++){
    arr.push(array[i] * -1)
  }
  return arr ;
}
 
 dune = ["paul", "gurney", "vladimir", "jessica", "chani"]
  function mapToNoChange(dune){
    let dune1 = []
    for (let i = 0 ; i < dune.length ; i++ ){
      dune1.push(dune[i])
    }
    return dune1
  }
      
function mapToDouble(array){
  let array1 = []
  for (let i = 0 ;i<array.length ; i++){
    array1.push(array[i] * 2)
  }
  return array1 ;
}

function mapToSquare(array){
  let array2 = []
  for (let i = 0 ;i<array.length ; i++){
    array2.push(array[i] * array[i])
  }
  return array2 ;
}




function reduceToTotal(sourceArray, startingPoint = 0){
  let sum = startingPoint
  for (let i = 0; i < sourceArray.length ; i++){
     sum = sum + sourceArray[i]
  }
  return sum
}

function reduceToAnyTrue(sourceArray){
  for (let i = 0; i < sourceArray.length ; i++){
    if (sourceArray[i]) return true
  }
  return false
}
    
function reduceToAllTrue(sourceArray){
  for (let i = 0; i < sourceArray.length ; i++){
    if (!sourceArray[i]) return false
  }
  return true
}

