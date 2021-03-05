const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground;
var box1, box2;
var pig1;
var log1; 

function setup() {
  createCanvas(1200,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(600, height, 1200, 20);
  box1 = new Box(700,320,70,70);
  box2 = new Box(920,320,70,70);
  pig1 = new Pig(810, 350);
  log1 = new Log(810,260,300, PI/2);
}

function draw() {
  background(225);  

  Engine.run(myEngine);

  ground.display();

  box1.display();
  
  box2.display();

  pig1.display();

  log1.display();
}
