
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const date = document.getElementById('date');

name.addEventListener("keypress",setName);
name.addEventListener("blur",setName);

function currenttime(){
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let tdate = today.toDateString();
    const ampM = hour > 12 ? 'PM' : 'AM';

     hour = hour%12 || 12;
     
     time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampM}`;
     date.innerHTML=`${tdate}`;
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
        document.body.style.backgroundImage='url("../images/morning.jpeg")';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize="cover";
        document.body.style.backgroundPosition="center";
        greeting.innerHTML="Good Morning";
    }
    else if(hour<18){
        document.body.style.backgroundImage='url("../images/noon.jpeg")';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize="cover";
        greeting.innerHTML="Good Afternoon";
    }
    else{
        document.body.style.backgroundImage='url("../images/gn.jpeg")';
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize="cover";

        greeting.innerHTML="Good Night";
        document.body.style.color="white";
    }
}


function getName()
{
    if(localStorage.getItem("myKeyname")===null){
        name.innerHTML='[Enter Name]';
    }
    else{
        name.innerHTML = localStorage.getItem("myKeyname");
    }

}


function setName(e)
{
    if(e.type === "keypress")
    {
        if(e.keyCode==13)
        {
            localStorage.setItem("myKeyname",e.target.innerHTML);
            name.blur();
        }
    }
    else{
        localStorage.setItem("myKeyname",e.target.innerHTML);
    }
}


currenttime();
Greet();
getName();