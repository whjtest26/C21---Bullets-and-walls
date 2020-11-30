var bullet,wall;
var thickness,speed,weight;


function setup(){

    createCanvas(1600,400);

    speed = Math.round(random(223,321));
	  weight = Math.round(random(30,52));
    thickness = Math.round(random(22,83));

    wall = createSprite(1200,200,thickness,200);
    wall.shapeColor = "lightblue";

    bullet = createSprite(100,200,100,20);
    bullet.shapeColor = "white";
    bullet.velocityX = speed;

}

function draw(){

  background("darkblue");

  if(hasCollided(bullet,wall)){
      var damage = (0.5 * weight * speed * speed)/(thickness * thickness * thickness);

      bullet.velocityX = 0;
      bullet.x = 1150;
      
      if(damage >= 10){
        wall.shapeColor = "red";
      }
      if(damage < 10){
        wall.shapeColor =  "green";
      }
  }

  
	
  drawSprites();
}
function hasCollided(lbullet, lwall)
{
	var bulletRightEdge = lbullet.x +lbullet.width;
	var wallLeftEdge = lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}