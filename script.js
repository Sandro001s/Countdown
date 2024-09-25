let daysdisplay = document.getElementById("days");
let hoursdisplay = document.getElementById("hours");
let minutesdisplay = document.getElementById("minutes"); 
let secondsdisplay = document.getElementById("seconds");

const newplace = '1 jan 2025';

function countDown() {
    const newDateplace = new Date(newplace);
    const currentDate = new Date();

    const totalseconds = (newDateplace - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const minutes = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds) % 60;

    daysdisplay.innerHTML = days;
    hoursdisplay.innerHTML = hours;
    minutesdisplay.innerHTML = minutes;
    secondsdisplay.innerHTML = seconds;

    console.log(days, hours, minutes, seconds);
}

setInterval(countDown, 1000);
