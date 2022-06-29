const characters =   ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"
];

let passwordsEL = document.querySelectorAll('.passwords')
let lengthEl = document.querySelector('#length-inp')
let numberEl = document.querySelector('#numbers-check')
let symbolEl = document.querySelector('#symbols-check')



function generate() {
    let passLength = lengthEl.value
    let firstPass = createPassword(passLength)
    let secondPass = createPassword(passLength)

    passwordsEL[0].textContent = firstPass
    passwordsEL[1].textContent = secondPass

}



function createPassword(len) {
    let password = ''

    for (let i = 0; i < len; i++) {
        //Get a random character from the array
        let characher = ''

        if (numberEl.checked && symbolEl.checked) {
            let randomNumber = Math.floor(Math.random() * characters.length)
            character = characters[randomNumber]
        } else if (numberEl.checked) {
            let randomNumber = Math.floor(Math.random() * 52 + 10)
            character = characters[randomNumber]
        } else if (symbolEl.checked) {
            let arr = characters.slice(0, 52);
            arr = arr.concat(characters.slice(52 + 10))
            let randomNumber = Math.floor(Math.random() * arr.length)
            character = arr[randomNumber]
        } else {
            let randomNumber = Math.floor(Math.random() * 52)
            character = characters[randomNumber]
        }



        //Add it to the password string
        password += character
    }

    return password
}