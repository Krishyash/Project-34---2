const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

let tank 
let plane1,plane2
let cannon
let enemyPlane1, enemyPlane2, enemyPlane3,backgroundImg
let END = 0
let PLAY = 1
let gameState = PLAY
let distance = 0

function preload() {

backgroundImage = loadImage("jungle.png")
plane1Img = loadImage("plane1.jpg")
tankImg = loadImage("tank.png")
plane2Img = loadImage("helicopter.png")
cannonImg = loadImage("canon.png")
enemyPlane1Img = loadImage("enemy1.jpg")
enemyPlane2Img = loadImage("enemy2.jpg")
enemyPlane3Img = loadImage("enemy 3.png")

}




function setup() {
  createCanvas(1200,500);
  // backgroundImg = createSprite(windowWidth,windowHeight)
  // backgroundImg.addImage(backgroundImage)
  

  engine = Engine.create();
  world = engine.world;
  
  enemy1Group = new Group()
  enemy2Group = new Group()
  enemy3Group = new Group()
  enemiesGroup = new Group()
 
  imageMode(CENTER)
}

function draw() 
{
  //background(51);



  //image(backgroundImage,width/2,height/2,100,100)
  tank = createSprite(600,450,50,50)
  tank.addImage(tankImg)
  tank.scale = 0.3

  if(keyIsDown(LEFT_ARROW)){
    tank.positionX = tank.positionX + 10
  }
  if(keyIsDown(RIGHT_ARROW)){
    tank.positionX = tank.positionX - 10
  }
  

  
  plane1 = createSprite(1000,100,50,50)
  plane1.addImage(plane1Img)
  plane1.scale = 0.4

  plane2 = createSprite (100,100,50,50)
  plane2.addImage(plane2Img)
  plane2.scale = 0.2



  if(gameState===PLAY){    


    edges = createEdgeSprites()
    tank.collide(edges)

    
  
     if(keyIsDown(LEFT_ARROW)){
       tank.positionX -=5 
    }
  
  
     if(keyIsDown(RIGHT_ARROW)){
       tank.positionX +=5
     }


    var enemiesGroup = Math.round(random(1,4))

  if (World.frameCount % 30 == 0) {
    if (enemiesGroup == 1) {
      enemy1GC();
    } else if (enemiesGroup == 2) {
      enemy2GC();
    } else{
      enemy3GC();

  }

  if(enemy1Group.isTouching(tank)){
    gameState = END

  }
  if(enemy2Group.isTouching(tank)){
    gameState = END

  }
  if(enemy3Group.isTouching(tank)){
    gameState = END

  }
  

  

  } else if (gameState === END){
    // gameOver.visible = true
    // restart.visible = true


    enemy1Group.setVelocityYEach(0);
    enemy1Group.setLifetimeEach(-1);
  
    enemy2Group.setVelocityYEach(0);
    enemy2Group.setLifetimeEach(-1);
  
    enemy3Group.setVelocityYEach(0);
    enemy3Group.setLifetimeEach(-1);

    enemy4Group.setVelocityYEach(0);
    enemy4Group.setLifetimeEach(-1);


    // gameOver.visible = true
    // restart.visible = true

    enemy1Group.destroyEach()
    enemy2Group.destroyEach()
    enemy3Group.destroyEach()

    
    // if(mousePressedOver(restart)){
    //   reset()
     }
    
  

 





  Engine.update(engine);
  
  drawSprites();
}}

function enemy1GC(){
  enemyPlane1 = createSprite (-10,Math.round(random(50,100)),50,50)
  enemyPlane1.addImage(enemyPlane1Img)
  enemyPlane1.scale = 0.6
  enemyPlane1.velocityX = 5
  enemyPlane1.setLifetime = 170
  enemy1Group.add(enemyPlane1)

  enemyPlane1.setCollider("rectangle",10,10,100,250)
  enemyPlane1.debug = true
}

function enemy2GC(){
  enemyPlane2 = createSprite (-10,Math.round(random(50,100)),50,50)
  enemyPlane2.addImage(enemyPlane2Img)
  enemyPlane2.scale = 0.6
  enemyPlane2.velocityX = 5
  enemyPlane2.setLifetime = 170
  enemy2Group.add(enemyPlane2)

  enemyPlane2.setCollider("rectangle",10,10,100,250)
  enemyPlane2.debug = true
}

function enemy3GC(){
  enemyPlane3 = createSprite (-10,Math.round(random(50,100)),50,50)
  enemyPlane3.addImage(enemyPlane3Img)
  enemyPlane3.scale = 0.6
  enemyPlane3.velocityX = 5
  enemyPlane3.setLifetime = 170
  enemy3Group.add(enemyPlane3)

  enemyPlane3.setCollider("rectangle",10,10,100,250)
  enemyPlane3.debug = true
}


