class Bob{

constructor(x,y){
    var options = {
        isStatic: false,
        restitution: 1,
        friction: 0,
        density: 7.8,
    }             
            this.body = Bodies.circle(x,y,252,options);
            World.add(world,this.body);


console.log(this.body);

}
display(){
        Push();
        ellipseMode(RADIUS);
        fill(254,0,255);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        Pop();

}

}