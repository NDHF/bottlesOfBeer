document.addEventListener("DOMContentLoaded", function () {

    function runProgram() {

        let main = document.getElementById("main");

        let numOfBottles = 99;

        while (numOfBottles > 0) {
            let message = numOfBottles + " bottles of beer on the wall, " +
            numOfBottles + " bottles of beer, " + 
            "take one down, pass it around, \n";
            numOfBottles = (numOfBottles - 1);
            message = message.concat(numOfBottles + 
            " bottles of beer on the wall!");
            let p = document.createElement("P")
            let pText = document.createTextNode(message);
            p.appendChild(pText);
            main.appendChild(p);
        }

    };

    runProgram();

});