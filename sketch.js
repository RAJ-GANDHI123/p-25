
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject, paperObject;
var world;
var paperImg;



function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	
	
	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperObject=new Paper(100,600,70)

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(230);
  
  
  groundObject.display();	
  dustbinObj.display();
  paperObject.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	   Matter.Body.applyForce(paperObject.body,paperObject.body.position,
		                     {x:340,y:-250});
	}

	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,
							  {x:0,y:20});
	 }

	 if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,
							  {x:-25,y:0});
	 }	

	 if(keyCode === RIGHT_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,
							  {x:25,y:0});
	 }
}