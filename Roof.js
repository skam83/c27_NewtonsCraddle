class Roof{
    constructor(x,y){
        var opt = {
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,600,20,opt);
        World.add(myWorld,this.body);
        
    }
    display(){
        var pos=this.body.position;
        fill ("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,600,20);
    }
}