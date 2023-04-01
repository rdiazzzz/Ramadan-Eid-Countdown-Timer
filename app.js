const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

let interval;

const startTimer = () => {
    const newEidDate = new Date('April 21, 2023 00:00:00').getTime();

    interval = setInterval(() => {

        const currentTime = new Date();
        const distance = newEidDate - currentTime;

        const d = Math.floor(distance / 1000 / 60 / 60 / 24);
        const h = Math.floor(distance / 1000 / 60 / 60) % 24;
        const m = Math.floor(distance / 1000 / 60) % 60;
        const s = Math.floor(distance / 1000) % 60;

        if (distance < 0) {
            clearInterval(interval)

            days.innerHTML = "Happy"
            hours.innerHTML = "Eid"
            minutes.innerHTML = "Mu"
            seconds.innerHTML = "Barak"
        } else {
            days.innerHTML = d;
            hours.innerHTML = h < 10 ? '0' + h : h;
            minutes.innerHTML = m < 10 ? '0' + m : m;
            seconds.innerHTML = s < 10 ? '0' + s : s;
        }
    });
}

setInterval(startTimer, 1000);
