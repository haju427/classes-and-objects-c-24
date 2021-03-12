/* class Box{
    constructor(x,y,width,height){
        var box_option = {
           restitution: 0.7,
           friction: 1,
           density: 1
        }
        this.body = Bodies.rectangle(x,y,width,height, box_option);
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body);
    }

     //functions

     display(){
        var posi = this.body.position;
        var angle = this.body.angle;
        push();
        translate(posi.x, posi.y);
        angleMode(RADIANS);
        rotate(angle);
        rectMode(CENTER);
        stroke('black');
        strokeWeight(4);
        fill('pink');
        rect(0,0, this.width, this.height);
        pop();
     }
} */

class Box extends BaseClass  {
   constructor(x, y, width, height) {
     super(x,y,width,height);
     this.image = loadImage('sprites/wood1.png')
    }
  }
