class Stone {

    constructor(x,y){
    var Options={
        isStatic : true,
        'restitution':0.8,
        'friction':0,
        'density':7.8,
     
        }
    
        this.body=Bodies.circle(x,y,25,Options);
       this.scale=0.8
        this.image=loadImage("stone6.png");
        World.add(world,this.body);
    
       
    }
    
    display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0)
    this.body.position.x = mouseX;
    this.body.position.y = mouseY;
    pop();
    
    }
    
    };