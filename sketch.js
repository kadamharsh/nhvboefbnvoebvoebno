var snow;
var mySound;
var snowfall1,snowfall2,snowfall3,snowfall4,snowfall5,snowfall6;
var character;
var snowBg;
function preload(){
snowBg =loadImage("snow2.png");
character = loadAnimation("MickeyMouse.png/mickey1.png","MickeyMouse.png/mickey1.png")
snow =loadAnimation("snow25.png","snow7.png");
mySound -loadSound("snow sound.mp3");
}

function setup() {
 createCanvas(1000,600);
 ch= createSprite(300, 330, 50, 50);
ch.addAnimation("h",character);
ch.scale =0.5;


snowfall1=createSprite(500,300,20,20);
snowfall1.addAnimation("s",snow);
snowfall1.scale =0.2;

snowfall2=createSprite(600,200,20,20);
snowfall2.addAnimation("s",snow);
snowfall2.scale =0.2;

snowfall3=createSprite(800,400,20,20);
snowfall3.addAnimation("s",snow);
snowfall3.scale =0.2;

snowfall4=createSprite(100,400,20,20);
snowfall4.addAnimation("s",snow);
snowfall4.scale =0.2;

snowfall5=createSprite(100,400,20,20);
snowfall5.addAnimation("s",snow);
snowfall5.scale =0.2;


snowfall6=createSprite(100,200,20,20);
snowfall6.addAnimation("s",snow);
snowfall6.scale =0.2;

}

function draw() {
  background(snowBg); 
  mySound.play(); 
  drawSprites();
}