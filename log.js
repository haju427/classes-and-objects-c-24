class Log{
    constructor(x,y,height,angle){
        var log_option = {
           restitution: 0.7,
           friction: 1,
           density: 1
        }
        this.body = Bodies.rectangle(x,y,20,height, log_option);
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
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
        fill('lightpurple');
        rect(0,0, this.width, this.height);
        pop();
     }
}