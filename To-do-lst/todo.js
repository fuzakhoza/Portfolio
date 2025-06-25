
const fruits = [];
let task;

document.getElementById('btn').onclick = ()=>{
let inputBox = document.getElementById('input-box');
let dateBox = document.getElementById('date-box');


if (inputBox.value == 0) {
    window.alert("Please add your task");  
}else
 if (dateBox.value == 0) {
    window.alert("Select date")
}else{

    let date = dateBox.value;
    let name = inputBox.value;
    dateBox.value = ''
    inputBox.value = '';
     task = `<p class = "p-tag"><span
    class="span2"> ${name}</span><span class ="span1"> ${date}</span> <button onclick ="updateTask()"
      class ="deleteBtn">Delete</button></p>`;
    document.querySelector(".container").innerHTML += task
     console.log(task);
}

  
} 

    function updateTask(){
    let pTag = document.querySelector(".p-tag");
    pTag.remove();
    console.log(pTag);
    

     
    
        
}
            

 


    
    
    

