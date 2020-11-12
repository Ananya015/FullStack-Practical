
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
     
     time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampM}`;

     setTimeout(currenttime,1000)

}

function addZero(n)
{
    return((parseInt(n,10)<10 ? '0': '')+n);

}



function Greet()
{
    let today = new Date();
    let hour = today.getHours();

    if(hour<12){
        document.body.style.backgroundImage;
    }
}





currenttime();
Greet();