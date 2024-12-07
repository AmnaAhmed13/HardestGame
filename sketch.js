//global variables
var wall1,wall2,wall3,player,obstacle1,obstacle2,obstacle3,obstacles,deaths;
function setup(){

wall1 = createSprite(200, 50, 300, 3);
wall1.shapeColor="green";
wall2 = createSprite(200, 350, 300, 3);
wall2.shapeColor="black";
wall3 = createSprite(370, 180, 50, 200);
wall3.shapeColor= ("purple");

player= createSprite(25, 180, 35, 35);
player.shapeColor= ("purple");

obstacle1 = createSprite(70, 320, 15, 15);
obstacle1.shapeColor= ("white");
obstacle2 = createSprite(170, 70, 15, 15);
obstacle2.shapeColor= ("white");
obstacle3 = createSprite(300, 320, 15, 15);
obstacle3.shapeColor= ("white");

deaths= 0;
//moving obstacles
  obstacle1.velocityY= 5;
  obstacle2.velocityY= -5;
  obstacle3.velocityY= 5;
  

}

function draw() {
  background("red");
  fill ("white");
  text("Deaths: "+ deaths, 300, 25);
  
 
  
  //moving obstales
  obstacle1.bounceOff(wall1);
  obstacle1.bounceOff(wall2);
  obstacle2.bounceOff(wall1);
  obstacle2.bounceOff(wall2);
  obstacle3.bounceOff(wall1);
  obstacle3.bounceOff(wall2);

  //moving player
  if(keyDown("right")){
    player.x = player.x + 2;
  }
  if(keyDown("left")){
    player.x = player.x - 2;
  }
  
  //death of player
  if(player.isTouching(wall1)||
     player.isTouching(wall2)||
     player.isTouching(obstacle1)||
     player.isTouching(obstacle2)||
     player.isTouching(obstacle3))
    {
       player.x = 25;
       player.y = 180;
       deaths = deaths + 1;
    }
  if (player.isTouching(wall3)){
    player.remove();
  } //close if

  drawSprites();
 } // close draw()