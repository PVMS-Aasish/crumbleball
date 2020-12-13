class Ball {
    constructor(x, y, width, height, angle) {
      var options = { 
        isStatic:false,
        restitution:0.3,      
        density: 1.2, 
       fricition:0.5};
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("pink");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }
  