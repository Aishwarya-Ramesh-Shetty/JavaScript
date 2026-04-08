const includeLowerCase = true;
const includeUpperCase = true;
const includeSymbols = true;
const includeNumbers = true;
const passwordlength = 12

const password = generatePassword(passwordlength,includeLowerCase,includeUpperCase,includeSymbols,includeNumbers);
console.log(`Password is : ${password}`);

function generatePassword(length,includeLowerCase,includeUpperCase,includeSymbols,includeNumbers){
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbols = "!@#$%^&*()_+=-";
    let allowedChars = "";
    let password = "";

    allowedChars += includeLowerCase ? lowercase : "";
    allowedChars += includeUpperCase ? uppercase  : "";
    allowedChars += includeSymbols ? symbols : "";
    allowedChars += includeNumbers ? number : "";

    if(length<=0){
        return `Password must be atleast 1 char long`
    }

    if(allowedChars.length == 0){
        return `Choose any one condition as true`;
    }

    for(let i = 0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length) ;
        password += allowedChars[randomIndex];
    }
    return password;
}