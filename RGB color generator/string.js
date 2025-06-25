

const redBox = document.getElementById("red");
const greenBox = document.getElementById("green");
const blueBox = document.getElementById("blue");
const colorValue = document.querySelector(".color-value");
const todoContainer = document.querySelector(".todo")

document.querySelector(".create-rgb").onclick = ()=>{
    let red = redBox.value;
    let green = greenBox.value;
    let blue = blueBox.value;
  
  colorValue.innerHTML =`rgb(${red},${green},${blue})`  
  todoContainer.style.backgroundColor = `rgb(${red},${green},${blue})`;
  document.querySelector(".create-rgb").style.color = `rgb(${red},${green},${blue})`

  document.querySelector(".copy-rgb").onclick = ()=>{
   navigator.clipboard.writeText(colorValue.innerHTML);
   alert(`rgb(${red},${green},${blue}) coppied to clipbord`)
   

  }
}

