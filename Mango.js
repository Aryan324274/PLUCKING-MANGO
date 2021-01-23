class Mango {

    constructor(x,y,diameter){
    var Options={
        isStatic : true,
        'restitution':0.8,
        'friction':0,
        
        }
    
        this.body=Bodies.circle(x,y,diameter,Options);
       this.diameter=diameter;
        this.image=loadImage("mango3.png");
        World.add(world,this.body);
    
       
    }
    
    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,this.diameter)
    
    pop();
    
    }
    
    };