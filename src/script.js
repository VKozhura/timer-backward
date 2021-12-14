const end = new Date(2022, 0, 1, 0, 0, 0).getTime();
let timerId = setInterval(() => {
	const now = Date.now();
	const timeInterval = end - now;
	if (timeInterval < 0) {
		clearInterval(timerId);
	} else {
		let days = Math.floor(timeInterval / (1000 * 60 * 60 * 24));
		let hours = Math.floor((timeInterval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((timeInterval % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((timeInterval % (1000 * 60)) / 1000);
		document.querySelector(".days").textContent = days;
		document.querySelector(".hours").textContent = ("0" + hours).slice(-2);
		document.querySelector(".minutes").textContent = ("0" + minutes).slice(-2);
		document.querySelector(".seconds").textContent = ("0" + seconds).slice(-2);
	}
}, 1000);
