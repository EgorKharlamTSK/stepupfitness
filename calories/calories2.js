let modal = document.getElementById('myModal');


let btn = document.getElementById("myBtn");

let btnMob = document.getElementById("myBtnMob");


let span = document.getElementsByClassName("close")[0];



btn.onclick = function() {
	modal.style.display = "block";
	document.body.style.overflow = "hidden";
}

btnMob.onclick = function() {
	modal.style.display = "block";
	document.body.style.overflow = "hidden";
}

span.onclick = function() {
	modal.style.display = "none";
	document.body.style.overflow = "auto";
}

window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}


function calsPerDay() {
	
	function find(id) { return document.getElementById(id) }
	
		let age = find("age").value
		let height = find("height").value
		let weight = find("weight").value
		let koef = find("PhA").value
		let result = 0
		
		if (find("male").checked)
			result = koef * (88.36 + (13.4 * weight) + (4.8 * height - (5.7 * age)))
		else if (find("female").checked)
			result = koef * (447.6 + (9.2 * weight) + (3.1 * height - (4.3 * age)))

		find("totalCals").innerHTML = Math.round( result )
		
		
	}
	calsPerDay()