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

class Box {
   constructor(x, y, width, height) {
     var options = {
         'restitution':0.8,
         'friction':1.0,
         'density':1.0
     }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     
     World.add(myWorld, this.body);
   }
   display(){
     var pos =this.body.position;
     var angle = this.body.angle;
     push();
     translate(pos.x, pos.y);
     rotate(angle);
     rectMode(CENTER);
     strokeWeight(4);
     stroke("green");
     fill(255);
     rect(0, 0, this.width, this.height);
     pop();
   }
 };