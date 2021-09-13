function mapToNegativize(sourceArray){
    return sourceArray.map(integer => integer * -1);
};

function mapToNoChange(sourceArray){
    return sourceArray;
};

function mapToDouble(sourceArray){
    return sourceArray.map(integer => integer * 2);
};

function mapToSquare(sourceArray){
    return sourceArray.map(integer => integer * integer);
};

function reduceToTotal(sourceArray, startPoint = 0){
    return sourceArray.reduce(function(accumulator, element){ return element + accumulator}, startPoint)
};

function reduceToAllTrue(sourceArray){
    return sourceArray.reduce(function(boolean, element){
        if(boolean === true && Boolean(element)){
            return true; 
        } else {
            return false;
    }}, true);
};

function reduceToAnyTrue(sourceArray){
    return sourceArray.reduce(function(boolean, element){
        if(boolean === true || Boolean(element)) {
            return true; 
        } else {
            return false;
    }}, false);
};
