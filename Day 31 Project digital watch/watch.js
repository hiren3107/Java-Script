var stop
document.getElementById("st").addEventListener("click", () => {
   stop =  setInterval(() => {
         var now = new Date();
         var hours = now.getHours();
         var minutes = now.getMinutes();
         var seconds = now.getSeconds();
        document.getElementById("display").innerHTML = `${hours} : ${minutes} : ${seconds}`;  
    },1000)
})
document.getElementById("stop").addEventListener("click", () => {
    clearInterval(stop);
})
