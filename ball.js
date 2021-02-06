class Ball{

    constructor(x,y,r){
        var ball_options = {
            friction : 0.04,
            restitution: 1,
            isStatic:false,
            density:0.7
        }
        this.x = x;
        this.y= y;
        this.r = r;

        this.image = loadImage("BALL-removebg-preview.png");
        this.body = Bodies.circle(x,y,r/2,ball_options);
        World.add(world,this.body);

    }

    display(){
        var ballPos = this.body.position;
        var angle = this.body.angle;

        push();
        imageMode(CENTER);
       translate(ballPos.x,ballPos.y);
       rotate(angle);
        image(this.image,0,0,this.r,this.r);
        pop();
    }
}