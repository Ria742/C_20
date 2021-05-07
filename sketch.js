function setup() {
  createCanvas(800,400);
  fixedRectangle = createSprite(200, 200, 50, 80);
  fixedRectangle.shapeColor = "green";
  movingRectangle = createSprite(400, 200, 80, 30);
  movingRectangle.shapeColor = "green";
}


function draw() {
  background(255,255,255); 
  movingRectangle.x = World.mouseX; 
  movingRectangle.y = World.mouseY;
  if(movingRectangle.x-fixedRectangle.x < fixedRectangle.width/2+movingRectangle.width/2 &&
     fixedRectangle.x-movingRectangle.x < fixedRectangle.width/2+movingRectangle.width/2 &&
     movingRectangle.y-fixedRectangle.y < fixedRectangle.width/2+movingRectangle.width/2 &&
     fixedRectangle.y-movingRectangle.y < fixedRectangle.width/2+movingRectangle.width/2
    ){
   fixedRectangle.shapeColor = "red" ;
   movingRectangle.shapeColor = "red";
  }
  else{
  fixedRectangle.shapeColor = "green";
  movingRectangle.shapeColor = "green";  
  }
  drawSprites();
}