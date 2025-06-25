// const inputBox = document.querySelector('.input-box');
// const button = document.querySelector('.btn');
// const result = document.querySelector('.name');
// const todos = [];
// let htmlResult ='';



//    todos.forEach(element => {
//      result.innerHTML += `<li>${element}<button>Delete</button></li>`;
      
//     }) 
   


// button.onclick = ()=>{
//     let inputValue = inputBox.value;
//     todos.push(inputValue);
//     inputBox.value = '';
   
//      localStorage.setItem("value", JSON.stringify(todos)) ;
    
   
//    console.log(todos);
   
    
    
// }
const menu = document.querySelector(".menu");
const body = document.querySelector("body");

menu.addEventListener("mouseover", ()=>{
  if (body.style.width <= "400px") {  document.querySelector('.navbar-list').style.display = 'block'
   
  }
      document.querySelector('.navbar-list').style.display = 'block'

})






