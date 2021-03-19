class BaseClass{
    constructor(x,y,width, height,angle){
        var option = {
           restitution: 0.8,
           friction: 1,
           density: 1
        }
        this.body = Bodies.rectangle(x,y,,width,height, option);
        this.width = width;
        this.height = height;
        this.image = loadImage('sprites/base.png');
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
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
     }
}
