const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}
var  engine, world;

function setup() {
	createCanvas(800, 700);

  groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

  engine = Engine.create();
  world = engine.world;
  
	Engine.run(engine);
dustbin = new redZone (560,560,150,200);
bottomWall = new redZone (560,585,170,50);
rightWall = new redZone (580,560,50,150);
leftWall = new redZone (540,560,50,150);
paper = new Paper (200,640,40);
}

function draw() {
  rectMode(CENTER);
  background("white");

dustbin.display();
paper.display();
bottomWall.display();
rightWall.display();
leftWall.display();

 drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   
   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85})
   }
 }
 

