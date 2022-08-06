const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



let passwordLength = 15

let firstPassword = document.getElementById("first-password")
let secondPassword = document.getElementById("second-password")


function generateRandomCharactersOne() {
    let randomCharacterOne = Math.floor(Math.random() * characters.length) 
    let randomCharacterTwo = Math.floor(Math.random() * characters.length) 
    return characters[randomCharacterOne]
    return characters[randomCharacterTwo]
}

function generatePassword() {
    let randomPasswordOne = " "
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordOne += generateRandomCharactersOne()
    }
   firstPassword.textContent = randomPasswordOne
   
   let randomPasswordTwo = " "
    for (let i = 0; i < passwordLength; i++) {
        randomPasswordTwo += generateRandomCharactersOne()
    }
    
    secondPassword.textContent = randomPasswordTwo
}



