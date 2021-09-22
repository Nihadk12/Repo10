

function myFunction(propName) {
    var lion = {
        "name": "Simba",
        "legs": 4,
        "tails": 1,
        "roar": "roar-roar"
    };
    delete lion[propName];
    console.log(lion);
    return lion;
}

myFunction("roar");

module.exports = myFunction;
