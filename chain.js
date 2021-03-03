class Chain{
    constructor(bodyA,pointB){
        var setting = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.4,
            length : 10
        }
        this.pointB = pointB;
        this.sling = Constraint.create(setting);
        World.add(world, this.sling);
    }
    display(){
        if (this.sling.body){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
        fly(){
            this.sling.bodyA = null
        }
}