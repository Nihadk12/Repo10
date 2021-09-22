var school = {
    "name" : "Arena",
    "location" : "Sarajevo",
    "established" : 2020
};

function myFunction(name) {

   school.name = name;
   console.log(school);
    return school;
}

myFunction("Paragon");

module.exports = {school, myFunction};