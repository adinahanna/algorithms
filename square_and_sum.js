const numbers = [1, 2, 2]
function squareSum(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        let squaredNum = numbers[i] ** 2
        sum += squaredNum 
    }
    console.log(sum)
  }
  squareSum(numbers)