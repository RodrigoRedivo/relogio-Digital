function clock(){

    let h = document.getElementById('h');
    let m = document.getElementById('m');
    let s = document.getElementById('s');

    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();

    h.innerHTML = hours;
    m.innerHTML = minutes;
    s.innerHTML = seconds
}

let interval = setInterval(clock, 1000);
