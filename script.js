document.addEventListener("DOMContentLoaded", function () {
	const HoursHand = document.querySelector(".hour");
	const MinuteHand = document.querySelector(".minute");
	const SecondHand = document.querySelector(".second");

	function setTime() {
		const today = new Date();

		const hours = today.getHours();
		const minutes = today.getMinutes();
		const seconds = today.getSeconds();

		const secondIndegree = (seconds / 60) * 360;
		const minuteIndegree = (minutes / 60) * 360;
		const hoursIndegree = (hours / 12) * 360;

		HoursHand.style.transform = "rotate(" + hoursIndegree + "deg)";
		MinuteHand.style.transform = "rotate(" + minuteIndegree + "deg)";

		SecondHand.style.transform = "rotate(" + secondIndegree + "deg)";
	}
	setInterval(setTime, 1000);
});
