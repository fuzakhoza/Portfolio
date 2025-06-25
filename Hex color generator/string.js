
const todo = document.querySelector(".todo");
const colorValue = document.querySelector(".color-value");

document.querySelector(".create-color").onclick = ()=>{
    let values = "0123456789ABCDEF";
    let autput = "";
    for(let i = 0,valuesLength = values.length; i < 6; ++i){
        autput += values.charAt(Math.floor(Math.random() * valuesLength))
    }
   colorValue.innerHTML = `#${autput}`;
   todo.style.backgroundColor = `#${autput}`;
   document.querySelector(".create-color").style.color = `#${autput}` 

   document.querySelector(".copy-color").onclick = ()=>{
  navigator.clipboard.writeText(colorValue.innerHTML);
  alert("Hex color coppied")
    
   }
}


