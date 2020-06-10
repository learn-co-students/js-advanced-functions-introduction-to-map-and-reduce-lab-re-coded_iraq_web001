
function mapToNegativize(num){
    let newArr = []
    for (var i = 0; i < num.length; i++) {
        if (num[i]>0){
      let res = -Math.abs(num[i])
      newArr.push(res)}

    else{
        let resu = Math.abs(num[i])
        newArr.push(resu)
    }}
  return newArr};
  function mapToNoChange(arr){
      let newArr = []
      for (var i = 0; i < arr.length; i++){
          newArr.push(arr[i])
      }
      return(newArr)
  }
  function mapToDouble(arr){
    let newArr = []
    for (var i = 0; i < arr.length; i++){
        let x = arr[i]*2
        newArr.push(x)
    }
    return(newArr)
  }
  function mapToSquare(arr){
    let newArr = []
    for (var i = 0; i < arr.length; i++){
        let x = arr[i]*arr[i]
        newArr.push(x)
    }
    return(newArr)
  }
  function reduceToTotal(arr,x=0){
    let res = 0
    for (var i = 0; i < arr.length; i++){
        res = res + arr[i]
    }
    return(res+x)
  }
  function reduceToAllTrue(arr){
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === false || arr[i] === null||!arr){
        return false;}}
    return true;}

    function reduceToAnyTrue(arr){
      for(let i = 0; i < arr.length; i++){
        if(arr[i] === true){
          return true;}}
      return false;}
