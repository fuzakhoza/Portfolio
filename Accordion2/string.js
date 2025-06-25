

const questions = document.querySelectorAll(".questions");



questions.forEach((questionsItems)=>{
    questionsItems.onclick = ()=>{
       if (questionsItems.classList.contains('active')) {
        questionsItems.classList.remove("active")
       }else{
        let currentActiveClass = document.querySelectorAll(".active");
        currentActiveClass.forEach((currentClass)=>{
            currentClass.classList.remove("ative");
        })
        questionsItems.classList.add("active")
       };
    }
})