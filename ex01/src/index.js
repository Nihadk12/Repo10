var myPet = {
    species : "Bulldog",
    name : "Rex",
    legs: 4,
    friends : ["Alex","Mata"]
}
function myFunction(myObj) {
    return myObj;
}

console.log(myFunction(myPet));
module.exports = {myPet, myFunction};