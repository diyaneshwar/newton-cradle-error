const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(380,100,230,20,roof_options);
    World.add(world,roof);
    ball1=Bodies.circle(300,300,20)
    World.add(world,ball1)
	ball2=Bodies.circle(340,300,20)
    World.add(world,ball2)
    rope1=new Rope(ball1,roof,-80,0)
	
	Engine.run(engine); 
	
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  //create ellipse shape for multiple bobs here
ellipse(ball1.position.x,ball1.position.y,40,40)


}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
