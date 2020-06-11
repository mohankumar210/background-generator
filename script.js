var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// var colorChange = document.getElementById("colorTest")

function setGradient() {
	body.style.background = 
		"linear-gradient(to right, "
		+color1.value
		 +","
		 + color2.value 
		 + ")";

		 css.textContent = body.style.background + ";";	
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

/*function setH4Prop(){
	colorChange.style.color = "green";
	colorChange.style.backgroundColor  = "red";
	colorChange.innerHTML = "I have changed the content!";
}
setH4Prop();*/