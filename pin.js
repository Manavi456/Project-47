class Pin{
    constructor(x, y, width,height) {
        var pin_options = {
            restitution :0.8,
            friction :1.0

        }
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;

        this.image = loadImage("APPLE-removebg-preview.png");
        this.body = Bodies.rectangle(x, y, width,height, pin_options);
        World.add(world, this.body);
        
        this.Visibility = 255;

      }
      display(){
           //console.log(this.body.speed);
           
   if(this.body.speed < 6){

    var position = this.body.position;
    var angle = this.body.angle;

   push();
   translate(position.x,position.y);
   rotate(angle);
   imageMode(CENTER);
   image(this.image,0,0,this.width,this.height);
   pop();

   }

   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  Score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score = score + 1;
    }
  }
        
         
}
    