const end = new Date(2022, 0, 1, 0, 0, 0).getTime();
let timerId = setInterval(()=>{
    const now = Date.now();
    const timeInterval = end - now;
    if (timeInterval < 0) clearInterval(timerId);
    else {
        let days = Math.floor(timeInterval / 86400000);
        let hours = Math.floor(timeInterval % 86400000 / 3600000);
        let minutes = Math.floor(timeInterval % 3600000 / 60000);
        let seconds = Math.floor(timeInterval % 60000 / 1000);
        document.querySelector(".days").textContent = days;
        document.querySelector(".hours").textContent = ("0" + hours).slice(-2);
        document.querySelector(".minutes").textContent = ("0" + minutes).slice(-2);
        document.querySelector(".seconds").textContent = ("0" + seconds).slice(-2);
    }
}, 1000);

//# sourceMappingURL=index.1625f28e.js.map
