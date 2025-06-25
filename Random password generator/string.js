

let numbers = "0123456789";
let lowerCase = "abcdefghijklmnopqrstuv";
let upperCase = "ABCDEFGHIJKLMNOPQRTUV";
let symbols = ":#@%";
let password = "";
let passwordVelue = document.querySelector(".password-value")



function generaterPassword(){
    let values = numbers + lowerCase + upperCase + symbols;
for (let i = 0, valuesLength = values.length; i < 8; ++i) {
    password += values.charAt(Math.floor(Math.random() * valuesLength));

}


passwordVelue.innerHTML = password;
password = "";


document.querySelector(".copy-password").onclick = ()=>{
    navigator.clipboard.writeText(passwordVelue.innerHTML);
    alert(` Coppied`);
    

}
}



