//queryselector on password output box and button
var output = document.querySelector("#box4");
var buttonEl = document.querySelector("#start");

//eventListener when user click on generate passwrd button
buttonEl.addEventListener("click", function() {
var combList = [];
var password = "";


    //fuction random number lower upper special character
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


    // prompt for user input number of characters if user cancel - stop  
    var length = prompt("How many characters for password do you need?\nMinimum length is 8 characters\nMaximum length is 128 characters");
    console.log(length);
    if (length == null) {
        alert("User aborted!. See you next time!");
        return
    } else {
        length = parseInt(length);
        // minimum and Maximum of characters if not within range - stop
        if (length < 8 || length > 128) {
            alert("Your input is not within range. Please press the generate button to try again");
            return
        }

        // ask user if need number
        var pickNumber = confirm("Do you need number in your password?");
        if (pickNumber === true) {
            combList.push("Number");
        }
        console.log(combList);

        // ask user if need lower case letter
        var pickLower = confirm("Do you need lower case characters in your password?");
        if (pickLower === true) {
            combList.push("Lower");
        }
        console.log(combList);

        // ask user if need upper case letter
        var pickUpper = confirm("Do you need upper case characters in your password?");
        if (pickUpper === true) {
            combList.push("Upper");
        }
        console.log(combList);

        // ask user if need special character
        var pickSpecial = confirm("Do you need special characters in your password?");
        if (pickSpecial === true) {
            combList.push("Special");
        }
        console.log(combList);

        // if user did not select any character type - stop
        if (combList === undefined || combList.length == 0) {
            alert("You didn't select any type of character. Please press the generate button to try again");
            return
        } else {
            // if user select any character - run function random
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
                }
            }
            // print out password and change output box and button color
            output.setAttribute("style", "border: solid");
            buttonEl.setAttribute("style", "background-color: green");
            output.setAttribute("style", "background-color: yellow");
            output.textContent = password;
        }
    }
});

