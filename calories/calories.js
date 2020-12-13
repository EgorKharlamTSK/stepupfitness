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

	document.addEventListener("DOMContentLoaded", function () {
	  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
	  console.log(scrollbar);
	  document.querySelector('[href="#openModal"]').addEventListener('click', function () {
		document.body.style.overflow = 'hidden';
		document.querySelector('#openModal').style.marginLeft = scrollbar;
	  });
	  document.querySelector('[href="#close"]').addEventListener('click', function () {
		document.body.style.overflow = 'visible';
		document.querySelector('#openModal').style.marginLeft = '0px';
	  });
	});
