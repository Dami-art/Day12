//Only change code below this line
    function rangeOfNumbers(n) {
        if (n < 1) {
        return [];
        } else {
            const countArray = myCounter(n-1);
            countArray.push(n);
       return countArray.sort((a, b) => b-a);
        }        
}

//Only change code  above this line

console.log(rangeOfNumbers(-1));
console.log(rangeOfNumbers(10));
console.log(rangeOfNumbers(5));
module.exports = rangeOfNumbers; 
  
          