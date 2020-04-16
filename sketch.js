var orkas;
var elor,proy,skran,roly;

function setup() {
  createCanvas(800,600);
  orkas=createSprite(400, 300, 50, 50);
  elor=createSprite(470, 300, 50, 50);
  proy=createSprite(540,300,40,40);
  skran=createSprite(610,300,60,60);
  roly=createSprite(680,300,20,20);
  }

function draw() {
  background(0,45,255); 
  elor.velocityY=-3; 
  if(frameCount%20===0){
    orkas.width=orkas.width+30;
    orkas.height=orkas.height+30;
  }
  if(elor.y<230){
    elor.velocityY=0;
    elor.velocityX=-3;
  }
  if(elor.x<330){
    elor.velocityY=3;
    elor.velocityX=0;
  }
  if(elor.y>370){
    elor.velocityY=0;
    elor.velocityX=3;
  }
  if(elor.x>470 && elor.y>370){
    elor.velocityY=-3;
    elor.velocityX=0;
  }
  proy.velocityY=-5;
  if(proy.y<160){
    proy.velocityY=0;
    proy.velocityX=-5;
  }
  if(proy.x<260){
    proy.velocityY=5;
    proy.velocityX=0;
  }
  if(proy.y>440){
    proy.velocityY=0;
    proy.velocityX=5;
  }
  if(proy.x>570 && proy.y>440){
    proy.velocityY=-5;
    proy.velocityX=0;
  }
  skran.velocityY=-2;
  if(skran.y<90){
    skran.velocityY=0;
    skran.velocityX=-2;
  }
  if(skran.x<160){
    skran.velocityY=2;
    skran.velocityX=0;
  }
  if(skran.y>510){
    skran.velocityY=0;
    skran.velocityX=2;
  }
  if(skran.x>640 && skran.y>510){
    skran.velocityY=-2;
    skran.velocityX=0;
  }
  roly.velocityY=-7;
  if(roly.y<20){
    roly.velocityY=0;
    roly.velocityX=-7;
  }
  if(roly.x<90){
    roly.velocityY=7;
    roly.velocityX=0;
  }
  if(roly.y>580){
    roly.velocityY=0;
    roly.velocityX=7;
  }
  if(roly.x>710 && roly.y>580){
    roly.velocityY=-7;
    roly.velocityX=0;
  }
  if(orkas.isTouching(elor)){
    elor.destroy();
  }
  if(orkas.isTouching(proy)){
    proy.destroy();
  }
  if(orkas.isTouching(skran)){
    skran.destroy();
  }
  if(orkas.isTouching(roly)){
    roly.destroy();
    orkas.destroy();
    
  }
  
  drawSprites();
} 
  