const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

var option={
  isStatic: true
}
  ground=Bodies.rectangle(200,380,400,20,option);
  World.add(world,ground);

}

function draw() {
  background(0);  
  Engine.update(engine);
 

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  
}
