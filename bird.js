class Bird extends BaseClass{
    constructor(x, y) {
        super(x, y, 50, 50);
        this.image = loadImage('sprites/bird.png');
    }

    display(){
        var posi = this.body.position;
        posi.x = mouseX;
        posi.y = mouseY;
        super.display();
    }
  }