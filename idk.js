<!DOCTYPE html>
<html>
<body>

<style>

.countryNames{
	color: red;
    margin-top:10px;
    margin-bottom:10px;
}

</style>

<h2>JavaScript Loops</h2>

<button onmouseover="myFunction()"onmouseleave="DelElements()">Click me</button>

<script>

var countries = ["Switzerland", "US", "Canada", "UK"]; // populate with JSON
function myFunction() {
	var text = "";
	var i;
	for (i = 0; i < countries.length; i++) {
    	text = countries[i];
    	var btn = document.createElement("button");
        var br = document.createElement("br");
    	var t = document.createTextNode(text);
        btn.appendChild(t);
        btn.setAttribute("class","countryNames");
        br.setAttribute("class","countryNames");
        document.body.appendChild(br);// Adds a break in between buttons
    	document.body.appendChild(btn);
      }
      
}


function DelElements(){
	var btns = document.getElementsByClassName("countryNames");
	while (btns[0]) {
        btns[0].remove();
    }
	
    
}

</script>

</body>
</html>



