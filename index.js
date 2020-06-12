// Your code here
function mapToNegativize(source){
  let newArray = [];
  for(let i=0; i<source.length; i++){
    newArray.push(-1 * source[i]);
  }
  return newArray;
}
function mapToNoChange(source){
  return source
}
function mapToDouble(source){
  let d = [];
  for(let i=0; i<source.length; i++){
    d.push(2 * source[i]);
  }
  return d;
}
function mapToSquare(source){
  let sq = [];
  for(let i=0; i<source.length; i++){
    sq.push(source[i] * source[i]);
  }
  return sq;
}

function reduceToTotal(source, sP=0){
  let total = sP
  for(let i=0; i<source.length; i++){
    total+= source[i]
  }
  return total
}
function reduceToAllTrue(source){
  for(let i=0; i<source.length; i++){
    if(!source[i]) return false
  }
  return true
}
function reduceToAnyTrue(source){
  for(let i=0; i<source.length; i++){
    if(source[i]) return true
  }
  return false
}