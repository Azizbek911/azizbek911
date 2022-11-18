const header = document.getElementById("header");
const main = document.getElementById("main");

// Width_Top
const logo = document.getElementById("logo");
const ul = document.getElementById("ul");
// Width_Bottom
const left = document.getElementById("left");
const right = document.getElementById("right");


// Open Close
const open = document.getElementById("open");
const close = document.getElementById("close")
open.style.cursor = "pointer";
close.style.cursor = "pointer";




open.onclick = function(){
  left.style.width = "15%";
  right.style.width = "85%";

  logo.style.width = "15%";
  ul.style.width = "85%";

  open.style.display = "none";
  close.style.display = "block"; 
}
close.onclick = function(){
  left.style.width = "5%";
  right.style.width = "95%";

  logo.style.width = "5%";
  ul.style.width = "95%";

  open.style.display = "block";
  close.style.display = "none";
}