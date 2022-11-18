const sec = document.querySelectorAll(".secs");
const min = document.querySelectorAll(".mins");
const hours = document.querySelectorAll(".hours");

function tiktak() {
    let second = new Date ().getSeconds();
    let minute = new Date ().getMinutes();
    let hour = new Date ().getHours();

    for (let i = 0; i < sec.length; i++) {
        sec[i].style.transform = `rotate(${180 + (second * 6)}deg)`
        min[i].style.transform = `rotate(${180 + (minute * 6)}deg)`
        hours[i].style.transform = `rotate(${180 + (hour * 30)}deg)`
    }
    

    console.log({second,minute,hour})
}

setInterval(tiktak,1000);

