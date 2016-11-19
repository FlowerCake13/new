console.log("afahofe");

function test() {
	var colors = ["#00ff00", "#00cc00", "#99ff99"];
	var divs = document.getElementsByTagName("div");

	for(var i = 0; i< colors.length; i++){
		divs[i].style.backgroundColor = colors[i];
	}
}
