const passwordGenerator= document.querySelector([".generator"]);
const passwordCopy = document.querySelector(".copy");
const passwordDisplay = document.querySelector(".display-password");
const [upperCase, lowerCase, symbols, numbers] = [
  "ABCDEFGHIJKLNOPQRSTUVWXYZ",
  "abcdefghijklnmopqrstuvwxyz",
  "/?.;:,!$#@&*",
  "1234567890",
];

passwordGenerator.onclick = () => {
  let password = "";
  let values = upperCase + lowerCase + symbols + numbers;
  for (let i = 0, valuesLength = values.length; i < 6; ++i) {
    password += values.charAt(Math.random() * valuesLength);
  }
  passwordDisplay.innerHTML = password;
}
passwordCopy.onclick = () => {
    if (passwordDisplay.innerHTML === "") {
        // alert("Please generate password")
    }else{
  navigator.clipboard.writeText(passwordDisplay.innerHTML);
  alert(`Password copied: Your password is ${passwordDisplay.innerHTML}`);
    }
   console.log( navigator.geolocation.getCurrentPosition());
   
}
