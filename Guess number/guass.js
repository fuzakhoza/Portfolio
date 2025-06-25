
const maxNum = 100;
const minNum = 1;
const answer = Math.floor(Math.random() * (maxNum - minNum  + 1))



let guess; 
let  attempt = 0;
let running = true;
   
document.getElementById('btn').onclick = () =>{

while(running){
    guess = document.getElementById('input-box').value;
    guess = Number(guess)

    if(isNaN(guess)){
      // document.getElementById('mytext').innerText = 'Please enter the valid number';
      window.alert(`invalid ${guess}`);

     } else if(guess < minNum || guess > maxNum) {
        // document.getElementById('mytext').innerText = 'Please enter the valid number';
        window.alert(`${guess} is invalid`);

      }else{
        attempt++;
        if (answer < guess) {
          window.alert(`${guess} is too high`);
            // document.getElementById('mytext').innerText = `${guess} is too high`;
            document.getElementById('input-box').value = '';
            //  document.getElementById('mytext').innerText = '';
        }else if(answer > guess){
          window.alert(`${guess} is too low`);
          //  document.getElementById('mytext').innerText = `${guess} is too low`;
             document.getElementById('input-box').value = '';
            //  document.getElementById('mytext').innerText = guess;
             
             

        }else{
            // document.getElementById('mytext').innerText = `Congratulatins your ${guess} in ${attempt} attempts`;
            window.alert(`Congratulation your${guess} in ${attempt}`);
            document.getElementById('input-box').value = '';
            console.log(answer);
            running = false;
            
        }
        
      }
      running = false;


  
    
}

}

