//Only change code below this line
    function rangeOfNumbers(startN, endN) {
        if (n < 1) {
        return [];
        } else {
            const countArray = myCounter(n-1);
            countArray.push(n);
       return countArray.sort((a, b) => b-a);
        }        
}

//Only change code  above this line

console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers; 
  
          