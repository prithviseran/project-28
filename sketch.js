
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,tree;
var mango,stone;

function preload()
{
boy = loadImage("Sprites/boy.png");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
boy = (100,100,200,100);
stone = new Stone(30,30,150,80);
tree = new tree(50,50,600,300);
mango1 = new mango(20,20,570,400);
mango2 = new mango(20,20,560,400);
mango3 = new mango(20,20,550,440);
mango4 = new mango(20,20,576,437);
mango5 = new mango(20,20,572,424);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  boy.display();
stone.display();
tree.display();
mango1.display();
mango2.display();
mango3.display(); 
mango4.display();
mango5.display();

  
 
}



