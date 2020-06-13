// Your code here
function mapToNegativize (arr){


    const dataArr = []
    arr.forEach(data => {
        const neg = data * -1

        dataArr.push(neg)
    })

    return dataArr
}
function mapToNoChange(arr){
    return arr
}
function mapToDouble(arr){
    let newArr = []
    arr.forEach(data => {
        const double = data * 2;
        newArr.push(double);

    })
    return newArr
}

function mapToSquare (arr){
    let newArr = [];
    arr.forEach(data => {
        const squared =  data * data;
        newArr.push(squared);
    })
    return newArr
}

//reduce

function reduceToTotal (arr, sum=0){
    arr.forEach(data => {
         sum += data;
         
         return sum
    })
   

    return sum
}

function reduceToAllTrue (arr = []){
    let newArr = arr.every(truthy => truthy)
    return newArr
}
function reduceToAnyTrue (arr ){
   let truthy  = false
    for (let i = 0; i < arr.length; i++){

        console.log(arr[i])
        if (arr[i]){
            truthy = true;
            break;
            
    }

}

    return truthy
    
}