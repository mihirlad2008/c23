
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;



	roofObject=new roof(400,250,230,20);
	ball1 = new Ball(320,575,40)
	ball2 = new Ball(360,575,40)
	ball3 = new Ball(400,575,40)
	ball4 = new Ball(440,575,40)
	ball5 = new Ball(480,575,40)
	
	rope1=new rope(ball1.body,roofObject.body,-80)
	rope2=new rope(ball2.body,roofObject.body,-40)
	rope3=new rope(ball3.body,roofObject.body,0)
	rope4=new rope(ball4.body,roofObject.body,40)
	rope5=new rope(ball5.body,roofObject.body,80)
    
   
	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ball1.display();
  ball2.display();
  
  ball3.display();
  ball4.display();
  ball5.display();

  
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
    
     Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-45});
	}
}


