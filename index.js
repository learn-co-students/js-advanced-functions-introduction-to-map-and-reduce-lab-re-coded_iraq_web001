// Your code here
function mapToNegativize(sourceArray){
 let a= sourceArray.map(x=>x*-1)
 return a
}



function mapToNoChange(sourceArray){
 let b= sourceArray.map(x=>x)
 return b
}


function mapToDouble(sourceArray){
 let  c= sourceArray.map(x=>x*2)
 return c
}


function mapToSquare(sourceArray){
 let  d= sourceArray.map(x=>x*x)
 return d
}


function reduceToTotal(sourceArray, startingPoint){

  if(typeof startingPoint !== "undefined"){
 let a= sourceArray.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue,startingPoint
)
    return a
  }
else{
  let a= sourceArray.reduce(
  ( accumulator, currentValue ) => accumulator + currentValue)
  return a
}

}

function reduceToAllTrue(sourceArray){
 let a= sourceArray.reduce((accumulator, currentValue ) =>
 {
   if(currentValue === true){
   accumulator=true
 }
 else if(currentValue === false){
   accumulator=false
 }
   return accumulator
 })
 return a
}


function reduceToAnyTrue(sourceArray){
 let a= sourceArray.reduce(( accumulator, currentValue ) =>{
   if(currentValue === true){
   accumulator=1
   accumulator++
 }
 else{
   accumulator=0
 }
   return accumulator
 })
 if(a>=1){
   return true
 }
 else{
 return false
}
}
