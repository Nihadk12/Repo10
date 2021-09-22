
function myFunction() {

    var myMusic = {
        001: {
            "artist": "Billy Joel",
            "title": "Piano Man",
            "release_year": 1973,
            "formats": {
                1:"CD",
                2:"8T",
                3:"LP"
            },
            "gold":true
        },
        002: {
            "artist":"John Legend",
            "title":"All of Me",
            "release_year":2013,
            "id": 10,
            "formats": {
                1:"CD",
                2:"Audio",
                3:"Video"
            }
        }
    };
return myMusic;
    
}

myFunction() [2];
module.exports = myFunction;