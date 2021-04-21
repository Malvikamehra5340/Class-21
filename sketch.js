var mr, fr

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 400, 50, 50);
  fr.shapeColor = "blue"
  fr.debug = "true";
  fr.velocityY = -3;
  
  mr = createSprite(400,0,50,50);
  mr.shapeColor = "green"
  mr.debug = "true";
  mr.velocityY= 3;

  
}

function draw() {
  background("black");
  
  bounceOff(mr,fr);
  
  drawSprites();
}

