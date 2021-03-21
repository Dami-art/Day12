//Only change code below this line   The function returns the sum of all odd number of the Fibonacci array that are les that or equal to num
function sumFibonacci(num) {
    if (num <= 0) {
        return 0; 
    } 
    if   (num === 1) {
        return 1;
    }
    var sum = 0;
    function fibonacci(counter) {
        if (counter === 2) {
            return [1, 1];
         } else {
                const countArr = fibonacci(counter-1);
                countArr.push(countArr[countArr.length -2] + countArr[countArr.length -1]);
                return countArr;
            }

        }
    
   var fibonacciArr  = fibonacci(num);
   
   for (var i = 0; fibonacciArr[i] <= num; i++) {
       if (fibonacciArr[i] % 2 !== 0) {
        sum += fibonacciArr[i];
   }
}
   return sum;  
      
}      


//Only change code  above this line

console.log(sumFibonacci(1)); 
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci; 

          