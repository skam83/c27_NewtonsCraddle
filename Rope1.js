class Rope{
    constructor(body1,body2,xoffset){
        var opt = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:xoffset,y:0}
        };

        this.rope = Constraint.create(opt);
        World.add(myWorld,this.rope);
        this.xoffset=xoffset;
    }
    display(){
       var pointA = this.rope.bodyA.position;
       var pointB = this.rope.bodyB.position;
      
        stroke ("black");
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x+this.xoffset,pointB.y);
    }
};

//make sure that line 6 is pointB and not point A.