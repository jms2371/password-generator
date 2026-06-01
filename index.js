const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordButton = document.getElementById("passwordButton")

let firstPassword = document.getElementById("passwordOne")
let secondPassword = document.getElementById("passwordTwo")

function generatePassword() {
    let password = "";
    for (let i = 0; i < 15; i++) {
        password += characters[Math.floor(Math.random() * characters.length)]

    }
    return password;
}

passwordButton.addEventListener("click", function() 
{ firstPassword.textContent = generatePassword();
secondPassword.textContent = generatePassword();
}

);


// Press button, generate two random passwords 
// 15 characters long 
// for loop? with random indices from above array


// Stretch goals:
// ability to set password length
// add "copy on click"
// toggle "numbers" and "symbols" on and off


