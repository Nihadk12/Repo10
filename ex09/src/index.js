
function myFunction(myObj, checkProp) {


    if(myObj.hasOwnProperty(checkProp)){
    username = myObj[checkProp];
    console.log(username);
    return username;
    }else {
        console.log ("Not Found");
        return "Not Found";
    }
    

}

myFunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"title");
myFunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"song");
myFunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"genre");
myFunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"actor");

module.exports = myFunction;