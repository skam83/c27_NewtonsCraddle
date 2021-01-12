const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Render=Matter.Render;

var myEngine,myWorld;
var roof,ball;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;


function setup() {
  createCanvas(1000,600);
  myEngine = Engine.create();
  myWorld = myEngine.world;

  roof = new Roof(450,100);

  bob1 = new Bob(300,450,40);
  bob2 = new Bob(375,450,40);
  bob3 = new Bob(450,450,40);
  bob4 = new Bob(525,450,40);
  bob5 = new Bob(600,450,40);
/*
  rope1 = new Rope(bob1.body,{x:300,y:100});
  rope2 = new Rope(bob2.body,{x:375,y:100});
  rope3 = new Rope(bob3.body,{x:450,y:100});
  rope4 = new Rope(bob4.body,{x:525,y:100});
  rope5 = new Rope(bob5.body,{x:600,y:100});*/

// using offet and change to Rope1.js in index.html
  rope1 = new Rope(bob1.body,roof.body,-150);
  rope2 = new Rope(bob2.body,roof.body,-75);
  rope3 = new Rope(bob3.body,roof.body,0);
  rope4 =  new Rope(bob4.body,roof.body,75);
  rope5 =  new Rope(bob5.body,roof.body,150);

  /* var render = Render.create({
  element: document.body,
  engine: myEngine,
  options: {
    width: 1200,
    height: 600,
    wireframes: false
  }
});
Render.run(render);*/
  
}

function draw() {
  background("lightskyblue");  
  Engine.update(myEngine);

  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
 bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
  if(keyCode === DOWN_ARROW){
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-100});
  }
}