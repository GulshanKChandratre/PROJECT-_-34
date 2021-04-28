
const Engine= Matter.Engine;
const World=  Matter.World;
 const Bodies=  Matter.Bodies;
 const Constraint= Matter.Constraint;

 var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16,block17,block18,block19,block20,block21;
var superman1,rope1;
var bg;

function preload() {
//preload the images here

}

function setup() {
  bg=loadImage("bg.jpg");

  createCanvas(3000,1500);
  engine = Engine.create();
  world = engine.world;
  superman1=new superman(200,200,30,30);
  rope1=new rope(superman1.body,{x: 200, y: 100})
  // create sprites here
  block1=new block(550,100,40,40)
  block2=new block(550,100,40,40)
  block3=new block(550,100,40,40)
  block4=new block(550,100,40,40)
  block5=new block(550,100,40,40)
  block6=new block(550,100,40,40)
  block7=new block(550,100,40,40)
  
  block8=new block(500,100,40,40)
  block9=new block(500,100,40,40)
  block10=new block(500,100,40,40)
  block11=new block(500,100,40,40)
  block12=new block(500,100,40,40)
  block13=new block(500,100,40,40)
  block14=new block(500,100,40,40)

  block15=new block(450,100,40,40)
  block16=new block(450,100,40,40)
  block17=new block(450,100,40,40)
  block18=new block(450,100,40,40)
  block19=new block(450,100,40,40)
  block20=new block(450,100,40,40)
  block21=new block(450,100,40,40)
  block22=new block(400,100,40,40)
  block23=new block(400,100,40,40)
  block24=new block(400,100,40,40)
  block25=new block(400,100,40,40)


  ground1=new ground(350,300,500,10)
  ground2=new ground(750,200,100,10)

  monster1=new monster(750,0,40,40);
}

function draw() {
  background(bg);  
  Engine.update(engine);

  superman1.display();
  rope1.display();
  block1.display();  
  block2.display(); 
  block3.display(); 
  block4.display(); 
  block5.display(); 
  block6.display(); 
  block7.display(); 

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();

  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();


  ground1.display();
  //ground2.display();

  monster1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(superman1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  rope1.fly();

}

