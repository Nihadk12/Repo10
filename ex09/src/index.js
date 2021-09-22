
function myFunction(myObj, checkProp) {


    if(myObj.hasOwnProperty(checkProp)){
    console.log(myObj[checkProp]);
    return 
    }else {
        console.log ("Not Found");
        return
    }
    

}

myFunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"title");
myFunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"song");
myFunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"genre");
myFunction({title:"Titanic", song:"My Heart Will Go On", genre:"drama"},"actor");

module.exports = myFunction;