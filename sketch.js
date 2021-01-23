
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	

boyImage=loadImage("boy.png")
treeImage=loadImage("tree.png")

}

function setup() {
	createCanvas(1800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	boy=createSprite(170,640)
	boy.addImage(boyImage)
	boy.scale=0.2

	stone=new Stone(65,530)

	ground = new Ground(900,770,1796,20);
	
	mango1=new Mango(1400,200)
	mango2=new Mango(1100,300)
	mango3=new Mango(1230,140)
	mango4=new Mango(1490,300)
	mango5=new Mango(1300,300)
	mango6=new Mango(1400,400)
	
	tree=createSprite(1250,400)
	tree.addImage(treeImage)
	tree.scale=0.6

	detectollision(stone,mango1)
	detectollision(stone,mango2)
	detectollision(stone,mango3)
	detectollision(stone,mango4)
	detectollision(stone,mango5)
	detectollision(stone,mango6)

}


function draw() {
  rectMode(CENTER);
  background(215);
  

  drawSprites();
  stone.display();
  mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
ground.display();
  
}




function detectollision(lstone,lmango){
mango.BodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position 

var distance=dis(stoneBodyPosition.X, stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if(distance<=lmango.r+lstone.r)
{
	Matter.Body.setStatic(lmango.Body,false)
}

}