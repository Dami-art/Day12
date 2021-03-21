//Only change code bellow



function myPetsFunction(pets) {
    return pets;
}

var myPetsArray = [
    {
        animalType: "Dog",
        name: "Pujdo"
    
    },
{
    animalType: "Cat",
    name: "Maca"

},

{
    animalType: "DBird",
    name: "Tweety"

},

];

var pets = myPetsArray[1].name;


//Only change code above

console.log(myPetsFunction(pets));
module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;


/*myPetsArray should be nested myPetsArray - three animal type one per each object in this order
my pets array shouled have three name pujdo maca tweety one pereach object in this orderuse dot and bracket notation to acces my pets arrray
mypetsfunction should return Maca
*/