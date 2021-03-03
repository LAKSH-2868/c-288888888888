class Stone{
    constructor(x,y,w,h){
        var options={
            isStatic:true,
            'restitution':0,
            'density':0.5,
            'friction':1
        }
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;

        this.Image = loadImage("images/stone.png")
        this.body = Bodies.rectangle(this.x,this.y,this,w,this.h,options);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
        imageMode(CENTER);
        image(this.Image, 0,0,this.w, this.h);
        pop();
    }
}