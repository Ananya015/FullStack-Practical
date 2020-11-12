
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');


function currenttime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();


    const ampM = hour > 12 ? 'PM' : 'AM';

     hour = hour%12 || 12;
     
     time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec} ${ampM}`;

     setTimeout(currenttime,1000)

}
currenttime();
