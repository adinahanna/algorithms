function plusMinus(arr) {
    let length = arr.length;
    let zeroCount = 0;
    let posCount = 0;
    let negCount = 0;
    
    for (let i = 0; i < length; i++){
        if (arr[i] < 0) {
            negCount+=1;    
        } else if (arr[i] > 0){
            posCount+=1;
        } else if (arr[i]===0){
            zeroCount+=1;
        }
    }
    let posRatio = posCount/length;
    let negRatio = negCount/length;
    let zeroRatio = zeroCount/length;
    
    console.log(posRatio.toFixed(6));
    console.log(negRatio.toFixed(6));
    console.log(zeroRatio.toFixed(6));
}