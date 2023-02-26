const hourr = document.querySelector('.hour')
const minn = document.querySelector('.minute')
const second = document.querySelector('.second') 

setInterval(() => {
   let d = new Date(); //object of date()
   let hr = d.getHours();
   let min = d.getMinutes();
   let sec = d.getSeconds();
   let  hr_rotation = 30 * hr + min / 2; //converting current time
   let min_rotation = 6 * min;
   let sec_rotation = 6 * sec;
  
    hourr.style.transform = `rotate(${hr_rotation}deg)`;
    minn.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);