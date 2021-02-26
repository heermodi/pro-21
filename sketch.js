var wall,thickness
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(200, 200, 50, 50);
  wall = createSprite(1200,200,thickness,height/2)

  bullet.velocityX = 5

speed = random(223,321)
weight = random(30,52)
thickness = random(22,83)


}

function draw() {
  background("black");
  
  if (wall.x-car.x < (car.width+wall.width)/2) {
    bullet.velocityX = 0
  wall.velocityX = 2
var deformation = 0.5 *weight * speed * speed/22509

if (deformation > 180){

bullet.shapeColor = color("white")
wall.shapeColor = color("green")
}

if (deformation < 180 && deformation < 180){

bullet.shapeColor = color("white")
wall.shapeColor = color("red")
}
  }



  drawSprites();
}