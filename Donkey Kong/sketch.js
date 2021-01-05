var monkey, monkey_running;
var banana, bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var ground;
var bananaGroup, obstaclesGroup;
var survivalTime=0;
var background;
var backgroundImage;
function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  backgroundImage = loadImage("jungle.jpg");

}



function setup() {
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  ground.visible=false;
  console.log(ground.x);

  background = createSprite();
  background.addImage(backgroundImage);
  background.scale=0.9;
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  bananaGroup= new Group();
  obstacleGroup = new Group();
  
}


function draw() {
 
//banana  
if(monkey.isTouching(bananaGroup)){
bananaGroup.destroyEach();   
survivalTime=survivalTime+2;  
}
  
if(survivalTime = survivalTime+20){ 

  switch(survivalTime) {
   case 10: monkey.scale=0.12
           break;
   case 20: monkey.scale=0.14  
           break;
  case 30:  monkey.scale=0.16
           break;
  case 40:  monkey.scale=0.18
           break
           default: break;
 } 
}
   

//Obstacles istouching
if(monkey.isTouching(obstacleGroup)){
monkey.scale=monkey.scale-0.1
survivalTime=survivalTime-5;
  obstacleGroup.destroyEach();
   }  

//Illusion 
 background.velocityX=-3;
if(background.x<0){
   background.x=background.width/2
   }  
  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  
//Calling  
  food();
  obstacles();
  //Jumping
  if (keyDown("space")) {
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY + 1;
  //Collide
  monkey.collide(ground);
  drawSprites();
  
  //Adding survival time  
  survivalTime=Math.ceil(frameCount/frameRate());
text("Survival Time:"+survivalTime,100,50);
 

}

function food() {
  if (frameCount % 80 === 0) {
    banana = createSprite(280, monkey.y, 20, 20);
    banana.addImage(bananaImage);
    banana.velocityX = -8;
    banana.scale = 0.1;
    banana.y = Math.round(random(120, 200));
    banana.setLifetime = 360;
  bananaGroup.add(banana)
  }
}

function obstacles(){
if(frameCount%300===0){
   obstacle = createSprite(280,315,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -8;
   obstacle.scale = 0.2;
obstacleGroup.add(obstacle);  
  
 
   }







}
