//alert("say hi")

//for adding class in tho]rough js:- document.querySelector("h1").classList.add("huge");

// use querySelector for work with js to react the page.

//document.querySelector("Name for tage")

//document.querySelector("h1").innerHtml ->that gives the text of h1

var imagenumber1=Math.ceil(Math.random()*6);
var imagename="dice"+ imagenumber1+ ".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imagename);


var imagenumber2=Math.ceil(Math.random()*6);
var imagename="dice"+ imagenumber2+ ".png";
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",imagename);


if(imagenumber1>imagenumber2)
	document.querySelector("h1").innerHTML= "Player1 Wins!";
else if(imagenumber1<imagenumber2)
	document.querySelector("h1").innerHTML= "Player2 Wins!";
else
	document.querySelector("h1").innerHTML="Draw!";