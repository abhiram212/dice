var random=Math.floor(Math.random()*6)+1;
var randomImage="images/dice"+random+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage);



var random1=Math.floor(Math.random()*6)+1;
var randomImage1="images/dice"+random1+".png";
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage1);
if(random>random1)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(random<random1)
{
  document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else{
  document.querySelector("h1").innerHTML="Draw!!";
}
