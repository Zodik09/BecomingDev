var randomNumber1 = Math.floor(Math.random()*6 +1);
var randomNumber2 = Math.floor(Math.random()*6 +1);

var img1Src1 = "./images/dice" + randomNumber1 + ".png";
var img1Src2 = "./images/dice" + randomNumber2 + ".png";

var img1 = document.querySelector(".dice .img1").setAttribute("src", img1Src1);
var img2 = document.querySelector(".dice .img2").setAttribute("src", img1Src2);