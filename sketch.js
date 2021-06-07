PLAY = 1;
END = 0;

var boy;
var ground, invisibleGround;

var obstaclesGroup, obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6 ;

var score=0;
var gameOver, restart;

function preload(){
backgroundImg = loadImage("background.png");
groundImg = loadImage("ground.png");
boyImg = loadImage("runningboygame.png");
gameOverImg = loadImage("gameover image.png");
restartImg = loadImage("restart image.png");

obstacle1 = loadImage("runningboygame.png");
obstacle2 = loadImage("runningboygame.png");
obstacle3 = loadImage("runningboygame.png");
obstacle4 = loadImage("runningboygame.png");
obstacle5 = loadImage("runningboygame.png");
obstacle6 = loadImage("runningboygame.png");
}

function setup() {
	createCanvas(800, 400);

	boy =createSprite(400,200,100,40);
  boy.addImage(boyImg);
  boy.scale=0.5;

  ground=createSprite(400,200,400,100);
  ground.addImage(groundImg);
  ground.x=ground.width/2;
  ground.velocityX = -(6 +3*score/100);

	gameOver= createSprite(450,300);
  gameOver.addImage(gameOverImg);

  restart=createSprite(450,300);
  restart.addImage(restartImg);
 
  

    
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



