var output = document.querySelector("#box4");
var buttonEl = document.querySelector("#start");
// var goodbye = "Since you did not select any.\nGood Bye!"

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
        // alert("Your password will be " + length + " characters length");
        var userTry = 99;
    }
    console.log(userTry);

    if (userTry === 3) {
        var length = 8;
        alert("Your selections were not within range. Your password will be forced to 8 characters length");
        var userTry = 99;
    }
}

var userTry = 0;
while (userTry < 2) {

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

    if (combList === undefined || combList.length == 0) {
        alert("Please select at least one type of character for your password\nTry again.");
        userTry = userTry + 1;
        console.log(userTry);

    } else {
        var userTry = 99;
        console.log(password.length);

        while (password.length < length) {

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
        
        }
        output.setAttribute("style", "border: solid");
        buttonEl.setAttribute("style", "background-color: green");
        output.setAttribute("style", "background-color: yellow");
        output.textContent = password;

    }
}
output.textContent = "You did not select any.\n Good Bye!";

});

