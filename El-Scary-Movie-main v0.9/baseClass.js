class baseClass {
constructor(x,y,width,height,angle){
var options = {
    'restitution':0.8,
    'friction':1.0,
    'density':1.0
}
this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
this.image = loadImage("BetaBackground.jpg");
this.imageJump = loadImage("sprites/Ghostface (The Killer)/Slasher07.png");
World.add(world,this.body);
}
display(){
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
}

Jump(){
    this.body.position.y = this.body.position.y -15;
}

}