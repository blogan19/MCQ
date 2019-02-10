function logo(){

	var logo = document.getElementsByClassName("logo");

	for(var i = 0; i< logo.length; i++){

	logo[i].innerHTML= '<svg height="280" width="300" id="logo"><circle cx="150" cy="150" r="100" fill="white"></circle><rect x="70" y="130"  width="160" height="40" rx="10" ry="10" fill="#0082c8"/><rect x="130" y="70" width="40" height="160" rx="10" ry="10" fill="#0082c8"/><rect x="145" y="70"  width="10" height ="160" fill="rgb(255,255,255")/><rect x="70" y="145"  width="160" height="10" fill="rgb(255,255,255)"/><line x1="120" y1="120" x2="145" y2="145" style="stroke:rgb(255,255,255); stroke-width:4"/><line x1="120" y1="180" x2="145" y2="155" style="stroke:rgb(255,255,255); stroke-width:4"/><line x1="180" y1="120" x2="155" y2="145" style="stroke:rgb(255,255,255); stroke-width:4"/><line x1="180" y1="180" x2="155" y2="155" style="stroke:rgb(255,255,255); stroke-width:4"/></svg>';
	}
}	
logo();	

function lineBreak(){
	var lineBreak = document.getElementsByClassName("lineBreak");

	for(var i=0; i < lineBreak.length; i++){
	  lineBreak[i].innerHTML = '<svg height="20" width="100%"><line x1="0" y1="7.5" x2="47.5%" y2="7.5" style="stroke: white; stroke-width:0.5"/><line x1="52.5%" y1="7.5" x2="100%" y2="7.5" style="stroke: white; stroke-width:0.5"/><line x1="0" y1="10" x2="47.5%" y2="10" style="stroke: white;stroke-width:0.5"/><line x1="52.5%" y1="10" x2="100%" y2="10" style="stroke: white;stroke-width:0.5"/><rect x="48.25%" y="7.5" width="3.5%" height="2.5" rx="2" ry="2" style="fill:white; opacity: 0.2"/><rect x="49.5%" y="3.75" width="1%" height="10" rx="2" ry="2" style="fill: white; opacity: 0.2"/></svg>';
	  }
}
lineBreak();

function lineBreak2(){
  var lineBreak = document.getElementsByClassName("lineBreak2");

  for(var i=0; i < lineBreak.length; i++){
    lineBreak[i].innerHTML = '<svg height="20" width="100%"><line x1="0" y1="7.5" x2="47.5%" y2="7.5" style="stroke: #292E49; stroke-width:0.5"/><line x1="52.5%" y1="7.5" x2="100%" y2="7.5" style="stroke: #292E49; stroke-width:0.5"/><line x1="0" y1="10" x2="47.5%" y2="10" style="stroke: #292E49;stroke-width:0.5"/><line x1="52.5%" y1="10" x2="100%" y2="10" style="stroke: #292E49;stroke-width:0.5"/><rect x="48.25%" y="7.5" width="3.5%" height="2.5" rx="2" ry="2" style="fill:#292E49; opacity: 0.2"/><rect x="49.5%" y="3.75" width="1%" height="10" rx="2" ry="2" style="fill: #292E49; opacity: 0.2"/></svg>';
    }
}
lineBreak2();





