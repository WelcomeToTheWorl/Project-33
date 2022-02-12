class Sand{
    constructor(x,y){
        var options={
         restitution:0.8,
            friction:1,
            density:1
        }
        this.body=Bodies.circle(x,y,60,options);
        this.radius=60;
        this.image=loadImage("snow4.webp")
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER)
        image (this.image,0,0,this.radius,this.radius)
        pop();
    
    }
}