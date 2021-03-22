function myNes() {
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }

        }
    }
    //only change bellow
var gloveBoxContents = myStorage.car.inside["glove box"];
return gloveBoxContents;
}

    //only change above
console.log(myNes());
module.exports = myNes;