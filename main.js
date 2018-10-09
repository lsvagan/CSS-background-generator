var col1 = document.getElementById("color1");
var col2 = document.getElementById("color2");
var body = document.getElementById("bodybackground");
var text = document.getElementById("rules");
var btn = document.getElementById("button");

col1.addEventListener('input', changeColor);
col2.addEventListener('input', changeColor);

function changeColor () {
  body.style.background = `linear-gradient(to right, ${col1.value} , ${col2.value})`;

  text.innerHTML = `background: linear-gradient(to right, ${col1.value} , ${col2.value});`;
}

var num = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];

btn.addEventListener('click', randomHex);

function randomHex () {
   var color1 = "#";
   var color2 = "#";

   for (let i = 0; i < 6; i++) {
      color1 = color1 + num[Math.floor(Math.random()*num.length)];

      color2 = color2 + num[Math.floor(Math.random()*num.length)];
   }
   
   col1.value = color1;
   col2.value = color2;
   changeColor();
}

