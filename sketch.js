const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg 
var fl1
var engine,world;
var sand
var snow=[]
function preload(){

bg=loadImage("snow3.jpg");


}





function setup() {
  createCanvas(windowWidth,windowHeight);
  engine = Engine.create();
  world = engine.world;


}




function draw() {
  background(bg);  
  Engine.update(engine);
  if(frameCount%5===0) 
  { 
    snow.push(new Sand(random(0, windowWidth), 30)) 
  } 
  for(var j = 0; j<snow.length; j++) 
  { 
    snow[j].display()
   }


  drawSprites();
}