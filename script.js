var output = document.querySelector("#box4");
var buttonEl = document.querySelector("#start");
var combList = []
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lowers = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// var specials = [~ ! @ # $ % ^ * - _ = + [ { ] } / ; : , . ?]



buttonEl.addEventListener("click", function() {

var combList = []



function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomSpecial() {
    return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
}


var password = "";
var userTry = 0;

// Prompt for user input number of characters
while (userTry < 3) {
    var length = prompt("How many characters for password do you need?\nMinimum length is 8 characters\nMaximum length is 128 characters");
    length = parseInt(length);

    // Minimum and Maximum of characters 
    if (length < 8 || length > 128) {
        alert("Your input is not within range. Please input the number within range 8 - 128 characters");
        userTry++;
    } else {
        alert("Your password will be " + length + " characters length");
        var userTry = 99;
    }
    console.log(userTry);

    if (userTry === 3) {
        var length = 8;
        alert("Since your selection was not within range. Your password will be 8 characters length");
        var userTry = 0;
    }
}

var userTry = 0;
while (userTry < 2) {

    // var pickNumber = confirm("Do you need number in your password?");
    // console.log(pickNumber);

    // var pickLower = confirm("Do you need lower case characters in your password?");
    // console.log(pickLower);

    // var pickUpper = confirm("Do you need upper case characters in your password?");
    // console.log(pickUpper);

    // var pickSpecial = confirm("Do you need special characters in your password?");
    // console.log(pickSpecial);

    var pickNumber = confirm("Do you need number in your password?");
    if (pickNumber === true) {
        combList.push("Number");
    }
    console.log(combList);

    var pickLower = confirm("Do you need lower case characters in your password?");
    if (pickLower === true) {
        combList.push("Lower");
    }
    console.log(combList);

    var pickUpper = confirm("Do you need upper case characters in your password?");
    if (pickUpper === true) {
        combList.push("Upper");
    }
    console.log(combList);

    var pickSpecial = confirm("Do you need special characters in your password?");
    if (pickSpecial === true) {
        combList.push("Special");
    }
    console.log(combList);


    // var pickNumber = confirm("Do you need number in your password?");
    // if (pickNumber === "true") {
    //     combList.push("Number");
    // }
    // combList.push(confirm("Do you need number in your password?"));
    // console.log(combList);

    // combList.push(confirm("Do you need lower case characters in your password?"));
    // console.log(combList);

    // combList.push(confirm("Do you need upper case characters in your password?"));
    // console.log(combList);

    // combList.push(confirm("Do you need special characters in your password?"));
    // console.log(combList);


    // var comList = ["true","true","false","false"]

    // var comListNew = [];

    // for(var i = 0; i < comList.length; i++) {

    //     if (comList[0] === "true") {
    //         comListNew.push("Number");
    //     } else if (comList[1] === "true") {
    //         comListNew.push("Number");

    //     } else if (comList[2] === "true") {
    //         comListNew.push("Number");

    //     } else if (comList[3] === "true") {
    //         comListNew.push("Number");

    //     }
    // }

    // console.log(comListNew);



    if ((pickNumber == "false") && (pickLocal == "false") && (pickUpper == "false") && (pickSpecial == "false")) {
        
        alert("Please select at least one type of character for your password");
        userTry++;

    } else {
        var userTry = 99;
        // console.log("length " + length);
        // console.log("pickNumber " + pickNumber);
        // console.log("lower " + pickLower);
        // console.log("upper " + pickUpper);
        // console.log("special " + pickSpecial);

        console.log(password.length);

        while (password.length < length) {

            // var comList = ["Number", "Special"]
            // var comList = ["Lower", "Upper"]



            // comList.forEach(getRandom);
            for(var i = 0; i < combList.length; i++) {

                function getRandom(combList) {
                        if (combList[i] === "Number") {
                            return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
                        }  else if (combList[i] === "Upper") {
                            return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
                        }  else if (combList[i] === "Lower") {
                            return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
                        }  else if (combList[i] === "Special") {
                            return String.fromCharCode(Math.floor(Math.random() * 15) + 33);
                        }   
                }
                var password = password.concat(getRandom(combList));
                    console.log(password);
                    console.log(password.length);
                
            }
            
            // if ((pickNumber = "true") && (pickLower = "true") ) {

            //     console.log(count);
            //     var randomNumberIndex = Math.floor(Math.random() * numbers.length);
            //     console.log(numbers[randomNumberIndex]);
            //     var password = password.concat(numbers[randomNumberIndex]);
            //     console.log(password);

            //     console.log(count);
            //     var randomLowerIndex = Math.floor(Math.random() * lowers.length);
            //     console.log(lowers[randomLowerIndex]);
            //     var password = password.concat(lowers[randomLowerIndex]);
            //     console.log(password);

            // }

            // if ((pickNumberr = "true")) {

            //     var password = password.concat(getRandomNumber());
            //     console.log(password);
            //     console.log(password.length);

            // }

            // if ((pickLowerr = "true")) {


            //     var password = password.concat(getRandomLower());
            //     console.log(password);
            //     console.log(password.length);


            // }

            // if ((pickUpperr = "true")) {


            //     var password = password.concat(getRandomUpper());
            //     console.log(password);
            //     console.log(password.length);


            // }

            // if ((pickSpecialr = "true")) {
 
            //     var password = password.concat(getRandomSpecial());
            //     console.log(password);
            //     console.log(password.length);


            // }
        
        }

    }

    // if (userTry === 3) {
    //     var length = 8;
    //     alert("Since you did not select any, your password will have all four character types");
    //     var userTry = 99;
    // }

}


output.setAttribute("style", "border: solid");
buttonEl.setAttribute("style", "background-color: green");
output.setAttribute("style", "background-color: yellow");
output.textContent = password;

});

