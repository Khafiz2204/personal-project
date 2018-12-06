<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

var countries = ["Switzerland", "US", "Canada", "UK"]; // populate with JSON
function myFunction() {
	var text = "";
	var i;
	for (i = 0; i < countries.length; i++) {
    	text = countries[i];
    	var btn = document.createElement("button");
        var br = document.createElement("br");
    	var t = document.createTextNode(text);
        var country_div = document.getElementById("countries_div");
        btn.appendChild(t);
        btn.setAttribute("class","countryNames");
        br.setAttribute("class","countryNames");
        country_div.appendChild(br);// Adds a break in between buttons
    	country_div.appendChild(btn);
      }
      
}


function DelElements(){
	var btns = document.getElementsByClassName("countryNames");
	var isEmpty = document.getElementById('countries_div').innerHTML === "";
	
	if( $('#cartContent').is(':empty') == false ) { // not empty, return
		return;
	
	}
	else{
		
		while (btns[0]) {
			btns[0].remove();
		}
	}
	
    
}

