class Rope{
    constructor(body1,point1){
        var opt = {
            bodyA: body1,
            pointB: point1
        };

        this.rope = Constraint.create(opt);
        World.add(myWorld,this.rope);
        
    }
    display(){
       var pointA = this.rope.bodyA.position;
       var pointB = this.rope.pointB;
        stroke ("black");
        strokeWeight(3)
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
};

//this code without offset works better.