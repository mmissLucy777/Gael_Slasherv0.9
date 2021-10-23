class slingShot {
    constructor(bodyA, pointB) {
        var options = {
            'bodyA': bodyA,
            'pointB': pointB,
            'stiffness': 0.004,
            'lengh': 5,
        }
        this.sling=Constraint.create(options);
        this.pointB=pointB 
        this.sling1=loadImage("/sprites/sling1.png");
        this.sling2=loadImage("/sprites/sling2.png");
        this.sling3=loadImage("/sprites/sling3.png");
        World.add(world, this.sling);
      }
      
      attach(body){
       this.sling.bodyA=body;
      }

      fly(){
        this.sling.bodyA=null;
         }  
      display(){
    image(this.sling1,70,100);
    image(this.sling2,40,100);
        if(this.sling.bodyA){
          var pointA =this.sling.bodyA.position;
          var pointB = this.pointB;
          strokeWeight(4);
    line (pointA.x-15, pointA.y, pointB.x-100, pointB.y);
    line (pointA.x-21, pointA.y, pointB.x-150, pointB.y);
    image(this.sling3,pointA.x-25,pointA.y-15, 10,40);      
  }
      }   
}