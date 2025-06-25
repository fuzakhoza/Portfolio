
const divBox = document.querySelector('.todolist');

document.querySelector('.createBtn').onclick = ()=>{
    let note = document.createElement('p');
    let image = document.createElement('img')
    note.className = 'notes';
    image.src = 'images/delete.png';
    image.className = 'deleteBtn'
    note.setAttribute("contenteditable", "true");
    divBox.appendChild(note).appendChild(image)

}
divBox.addEventListener('click', (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove()
        
        
    }
})


    


        
 
 












    
    
    

