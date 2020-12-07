var fixedrect, movingrect;
var rect3, rect4;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(400, 100, 50, 80);
  fixedrect.shapeColor = "green";
  fixedrect.debug = true;
  movingrect = createSprite(400, 800,80,30);
  movingrect.shapeColor = "green";
  movingrect.debug = true;
  rect3  = createSprite(100,400,50,80);
  rect3.shapeColor = "green"
  rect3.debug = true;
  rect4  = createSprite(800,400,50,80);
  rect4.shapeColor = "green"
  rect4.debug = true;

  movingrect.velocityY = -5;
  fixedrect.velocityY = +5;
rect3.velocityX = +5
rect4.velocityX = -5
}

function draw() {
  background(0,0,0);  
   isbouncing(rect3,rect4);
  drawSprites();
}

function isbouncing(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
  object1.velocityX = object1.velocityX * (-1);
  object2.velocityX = object2.velocityX * (-1);
}
if (object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2){
  object1.velocityY = object1.velocityY * (-1);
  object2.velocityY = object2.velocityY * (-1);
}
}