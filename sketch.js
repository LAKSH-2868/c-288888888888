
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,maongo11,mango12,mango1300;
var world,boy;
var chain;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new mango(1100,100,30);
	mango2 = new mango(1025,100,30);
	mango3 = new mango(1175,110,30);  
	mango4 = new mango(1100,30,30);
	mango5 = new mango(1140,160,30);
	mango6 = new mango(1060,160,30);
	mango7 = new mango(980,170,30);
	mango8 = new mango(900,180,30);
	mango9 = new mango(1225,180,30);
	mango10 = new mango(950,220,30);
	mango11 = new mango(1025,220,30);
	mango12 = new mango(1100,220,30);
	mango1300 = new mango(1175,230,30);
	treeObj = new tree(1050,580);
	stoneObj = new Stone(150,-75,100,100)
	groundObject=new ground(width/2,600,width,20);
	chain = new Chain(stoneObj.body,{x:250,y:250})

	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  chain.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango1300.display();
  stoneObj.display();

  groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}