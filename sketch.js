const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0, height -5, width * 2, 10);
  tower = new Tower(150, 350, 160, 310);
  cannon=new Cannon (150,150,100,50,PI/-4)

}

function draw() {
  background(189);
  Engine.update(engine);

  ground.display();
  
  tower.display();
  cannon.display();
 
}
