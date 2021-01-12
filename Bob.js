class Bob{
    constructor(x,y,r){
        var opt ={
            restitution:1.2,
            density:0.5,
            friction:0.5,
            
        }
        this.body=Bodies.circle(x,y,r,opt);
        World.add(myWorld,this.body);
        this.r=r;
        //console.log(this.body);
    }
    display(){
        var pos = this.body.position;
       fill ("pink");
       ellipseMode(RADIUS);
       ellipse(pos.x,pos.y,this.r,this.r);
    }
}