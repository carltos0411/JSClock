setInterval(() =>
{
     t = new Date() ; 
     sec = t.getSeconds() ; 
     min = t.getMinutes() ; 
     hr  = t.getHours() ; 
     hrrotate = 30*hr + min/2 ; 
     minrotate = min*6 + 0.1*sec ; 
     secrotate = sec*6 ; 
  
    hours.style.transform = `rotate(${hrrotate}deg)` 
    minutes.style.transform = `rotate(${minrotate}deg)` 

    seconds.style.transform = `rotate(${secrotate}deg)` ;

},1000);
// setInterval(() => {
//     d = new Date();
//     htime = d.getHours();
//     mtime = d.getMinutes();
//     stime = d.getSeconds();
//     hrotation = 30*htime + mtime/2;
//     mrotation = 6*mtime;
//     srotation = 6*stime;

//     hours.style.transform = `rotate(${hrotation}deg)`;
//     minutes.style.transform = `rotate(${mrotation}deg)`;
//     seconds.style.transform = `rotate(${srotation}deg)`;
// }, 1000);