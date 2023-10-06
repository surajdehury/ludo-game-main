//for player 1

var n = Math.random()*6+1;
   n = Math.floor(n);        //generation of random number for player 1
var newImage = "dice"+n+".png";       //setting of image number(dice1-6)
var newSetImage = "images/"+newImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",newSetImage); //changing the image to the required image

//for player 2

var m  = Math.random()*6+1;
    m = Math.floor(m);                 //generation of random number for player 2
var newImage2 = "dice"+m+".png";       //setting of image number(dice1-6)
var newSetImage2 = "images/"+newImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",newSetImage2);       //changing the image to the required image


// condition on whether player 1 wins or player 2 wins and its subsequent show at the h1

if(n>m){
  document.querySelector("h1").innerHTML = "player 1 wins"
}
else if(m>n){
  document.querySelector("h1").innerHTML = "player 2 wins"
}
else{
  document.querySelector("h1").innerHTML = "draw"
}
