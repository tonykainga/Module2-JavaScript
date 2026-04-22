function squareOfNumbers(num){
  return Number(num
  .toString()
  .split("")
  .map(function(num){
    return num * num;
  })
  .join("")
 );
}
console.log(squareOfNumbers(9119))

function squareDigits(digits){
    return Number(digits
    .toString()
    .split("")
    .map(function(digits){
        return digits * digits
    })
    .join("")
   );
}
console.log(squareDigits(765));