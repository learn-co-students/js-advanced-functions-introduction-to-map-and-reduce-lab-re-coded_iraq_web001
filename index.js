// Your code here
function mapToNegativize(sourceArray){
    return sourceArray.map(x => x * -1);
}

function mapToNoChange(sourceArray){
    return sourceArray.map(x => x);
}

function mapToDouble(sourceArray){
    return sourceArray.map(x => x*2);
}
function mapToSquare(sourceArray){
    return sourceArray.map(x => x*x);
}
function reduceToTotal(sourceArray, startingPoint = 0){
    const total = function(accumulator, currentValue){ return accumulator + currentValue }

    return sourceArray.reduce(total, startingPoint)
}

function reduceToAllTrue(sourceArray) {
    return sourceArray.reduce(function(total, currentValue) {
        if (currentValue) {
            return true
        } else {
            return false
        }
    })
}

function reduceToAnyTrue(sourceArray) {
    return sourceArray.reduce(function(total, currentValue) {
        if (currentValue) {
            return true
        } else {
            return false
        }
    })
}