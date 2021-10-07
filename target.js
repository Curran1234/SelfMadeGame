class Target {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("target.jpeg");

      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      image(this.image,700,100,this.width, this.height);
      

      
    }
  };
