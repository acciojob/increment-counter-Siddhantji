//your JS code here. If required.
const counter = document.getElementById("counter");
const butn = document.getElementById("incrementBtn");

butn.addEventListner("click",function() {
	let count = parseInt(counter.textContent);
	alert(count);
	count++;
	counter.textContent=count;
	})