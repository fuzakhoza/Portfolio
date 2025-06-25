const hours = document.querySelector(".hrs");
const minutes = document.querySelector(".min");
const secon = document.querySelector(".sec");

setInterval(() => {
    
const currentTime = new Date();

hours.innerHTML = (currentTime.getHours()< 10 ?"0" :"") + currentTime.getHours();
minutes.innerHTML = (currentTime.getMinutes()< 10 ?"0" :"") + currentTime.getMinutes();
secon.innerHTML = (currentTime.getSeconds()< 10 ?"0" :"") + currentTime.getSeconds();
},1000);
