
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Helicopter;
var BG;


function preload() {
 
  Heli = loadAnimation('animated-helicopter.gif');

 bg = loadImage('OIP.jpg');
};

function setup() {
  createCanvas(windowWidth,windowHeight);
 
  engine = Engine.create();
  world = engine.world;

  BG = createSprite(800,400,10,10);
  BG.addImage('Bg',bg);
  BG.scale = 3;

  
  Helicopter = createSprite(100,100,10,10);
  Helicopter.addAnimation('Heli',Heli);
  Helicopter.scale = 0.5;


  


};


function draw() 
{
  background(0);
  
  Engine.update(engine);


  










  //imageMode(CENTER);
  drawSprites();
};

