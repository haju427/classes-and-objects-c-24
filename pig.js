class Pig{
    constructor(x,y){
        var pig_option = {
           restitution: 0.7,
           friction: 0.3,
           density: 1
        }
        this.body = Bodies.rectangle(x,y,50,50, pig_option);
        this.width = 50;
        this.height = 50;
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
        stroke('green');
        strokeWeight(4);
        fill('lightgreen');
        rect(0,0, this.width, this.height);
        pop();
     }
}