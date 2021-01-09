class redZone{
  constructor(x,y,width,height){
     var options = {
      isStatic : true
     }
 this.x=x;
 this.y=y;
 this.redZoneWidth=200;
 this.redZoneHeight=213;
 this.wallThickness=20;
 
 this.image=loadImage("Sprites/dustbingreen.png")
 this.bottomBody=Bodies.rectangle(this.x, this.y, this.redZoneWidth, this.wallThickness, {isStatic:true})
 this.leftWallBody=Bodies.rectangle(this.x-this.redZoneWidth/2, this.y-this.redZoneHeight/2, this.wallThickness, this.redZoneHeight, {isStatic:true})
  
 this.rightWallBody=Bodies.rectangle(this.x+this.redZoneWidth/2, this.y-this.redZoneHeight/2, this.wallThickness, this.redZoneHeight, {isStatic:true})
 
 World.add(world, this.bottomBody)
 World.add(world, this.leftWallBody)
 World.add(world, this.rightWallBody);
}
display(){


var posBottom =this.bottomBody.position;
var posLeft=this.leftWallBody.position;
var posRight=this.rightWallBody.position;

push()
translate(posLeft.x, posLeft.y);
rectMode(CENTER)
angleMode(RADIANS)
fill(255)
rotate(this.angle)
pop()


push()
translate(posRight.x, posRight.y);
rectMode(CENTER)
angleMode(RADIANS)
fill(255)
rotate(-1*this.angle)
pop()

push();
translate(pos.x,pos.y)
rectMode(CENTER);
angleMode(RADIANS)
fill(255)
imageMode(CENTER);
image(this.image, 0,-this.redZoneHeight/2,this.redZoneWidth, this.redZoneHeight);
pop();

}

}