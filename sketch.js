var mrect,srect
function setup() {
  createCanvas(800,400);
  mrect = createSprite(100,200,50,50);
  mrect.shapeColor = "red";

  srect = createSprite(400,200,50,50);
  srect.shapeColor = rgb(15,252,181);
}

function draw() {
  background(255,255,255); 
  mrect.x = World.mouseX;
  mrect.y = World.mouseY;
if(mrect.x-srect.x<mrect.width/2+srect.width/2
  && srect.x-mrect.x<mrect.width/2+srect.width/2
  && mrect.y-srect.y<mrect.width/2+srect.width/2
  && srect.y-mrect.y<srect.width/2+mrect.width/2){
 mrect.shapeColor = rgb(15,252,181);
 srect.shapeColor = "red";
}
else{
  mrect.shapeColor = "red";
  srect.shapeColor = rgb(15,252,181); 
}
  drawSprites();
}