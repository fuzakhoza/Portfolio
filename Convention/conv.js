
let inputBox = document.getElementById("input-box");

document.getElementById("btn").onclick = ()=>{
  let metre = document.getElementById("metre-box");
  let kilometre = document.getElementById("kilometre-box");
 

  if (metre.checked) {
    inputBox.value;
    let result = inputBox.value * 1000;
    document.getElementById("myPelement").innerText = result + "m";
  }else
  if (kilometre.checked) {
    inputBox.value;
    let result = inputBox.value / 1000;
    document.getElementById("myPelement").innerText = result + "km";
  
  }
  else{
    document.getElementById("myPelement").innerText = "please check the box"
  }

}
