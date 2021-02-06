const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const World = Matter.World;

var ball;
var score ;
var pin1, pin2,pin3,pin4,pin5;
var pin6,pin7,pin8,pin9,pin10;
var pin11,pin12,pin13,pin14,pin15;
var pin16,pin17,pin18,pin19,pin20;
var pin21,pin22,pin23,pin24,pin25;
var pin26,pin27,pin28,pin29,pin30;
var ground,bgImg;

function preload(){
  bgImg = loadImage("Screenshot (492).png");
}

function setup(){
  createCanvas(1500,700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

 
  ground = new Ground(750,685,1500,20);
  
  ball = new Ball(200,650,90);
  

  pin1= new Pin (1220,650,50,50);
  pin2= new Pin (1230,650,50,50);
  pin3= new Pin (1260,650,50,50);
  pin4= new Pin (1290,650,50,50);
  pin5= new Pin (1320,650,50,50);
  pin6= new Pin (1350,650,50,50);
  pin7= new Pin (1370,650,50,50);
  
  
  pin8 = new Pin (1160,590,50,50);
  pin9 = new Pin (1210,590,50,50);
  pin10 = new Pin (1260,590,50,50);
  pin11 = new Pin (1310,590,50,50);
  pin12 = new Pin (1360,590,50,50);
  pin13 = new Pin (1410,590,50,50);

  pin14 = new Pin (1180,530,50,50);
  pin15 =new Pin (1230,530,50,50);
  pin16 = new Pin (1280,530,50,50);
  pin17 = new Pin (1330,530,50,50);
  pin18 = new Pin (1380,530,50,50);

  pin19 = new Pin (1200,470,50,50);
  pin20 = new Pin (1250,470,50,50);
  pin21 = new Pin (1300,470,50,50);
  pin22 = new Pin (1350,470,50,50);

  pin23 = new Pin (1220,410,50,50);
  pin24 = new Pin (1270,410,50,50);
  pin25 = new Pin (1320,410,50,50);

  pin26 = new Pin (1250,350,50,50);
  pin27 = new Pin (1300,350,50,50);

  pin28 = new Pin (1280,290,50,50);

  score = 0;

}

function draw(){
  background(bgImg);

   stroke("black");
   textSize(35)
   fill("black");
   text("Score : " + score, width-300, 50)

  ball.display();
  ground.display();
  pin1.display();
  pin2.display();
  pin3.display();
  pin4.display();
  pin5.display();
  pin6.display();
  pin7.display();

  pin8.display();
  pin9.display();
  pin10.display();
  pin11.display();
  pin12.display();
  pin13.display();

  pin14.display();
  pin15.display();
  pin16.display();
  pin17.display();
  pin18.display();

  pin19.display();
  pin20.display();
  pin21.display();
  pin22.display();

  pin23.display();
  pin24.display();
  pin25.display();

  pin26.display();
  pin27.display();

  pin28.display();

}

function keyPressed(){

  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:250,y:250});
  }
}