//Only change code below this line
    function myCounters(n) {
        if (n < 1) {
        return [];
        } else {
            const countArray = myCounter(n-1);
            countArray.push(n);
       return countArray.sort((a, b) => b-a);
        }        
}

//Only change code  above this line

console.log(myCounter(-1));
console.log(myCounter(10));
console.log(myCounter(5));
module.exports = myCounter; 
  
          