
 let max = 100;
 let min = 1; 
 let guass = Math.floor(Math.random() * max - min)+1;
 let attempts = 0; 
 let score = 100;
 let running = true

 document.getElementById("btn").onclick = ()=>{
 let inputBox = document.getElementById("input-box");
 let divBox = document.querySelector('.container');
 attempts++;
 score -= 10;

 let number = Number(inputBox.value);
 inputBox.value = "";

 if (running) {

        if (number < min || number > max) {
            divBox.innerHTML = "Number is invalid";
            running = true;
         }else{
            if (number < guass) {
                divBox.innerHTML = 'Your lower';
                running = true;
            }else
            if (number > guass) {
                divBox.innerHTML = "Your higher";
                running = true;
            }else{
                divBox.innerHTML = `You win, guess is 
                <span class = "span-guass">${guass}
                </span> in <span class= "span-attempts">
                 ${attempts}</span>  attempts,
                 you score <span class = "span-score">
                 ${score}</span>points`;
                 running = false;     
            }
         }
         if (attempts > 10) {
            divBox.innerHTML = "GAME OVER"
            running = false
         }
    }
 console.log(running);
 
 }
 


    
    
    

