const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var world;
var ground,ball,dustbin1,dustbin2,dustbin;

function setup() {
	createCanvas(1200, 400);
     rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,400,1200,20);
	ball=new Ball(25,200,40);
	dustbin=new Dustbin(1000,390,200,20);
    dustbin1=new Dustbin(900,390,20,100);
	dustbin2=new Dustbin(1100,390,20,100);


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 250,
		  wireframes: false
		}
	  });

	Engine.run(engine);

  
}


function draw() {
rectMode(CENTER);
  background(0);
  //Engine.run(engine);
  ground.display();
  ball.display();
  dustbin.display();
  dustbin1.display();
  dustbin2.display();

  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
  
	}
}