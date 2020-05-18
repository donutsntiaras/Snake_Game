class snake {
  
    constructor() {
      this.body = [];
      this.body[0] = createVector(floor(w/2), floor(h/2));
      this.xspeed = 0;
      this.yspeed = 0;
      this.z = 0;
    }
    
    direct(x, y) {
      this.xspeed = x;
      this.yspeed = y;
    }
    
    move() {
      var head = this.body[this.body.length-1].copy();
      this.body.shift();
      head.x += this.xspeed;
      head.y += this.yspeed;
      this.body.push(head);
    }
    
    grow() {
      let head = this.body[this.body.length-1].copy();
      this.z++;
      this.body.push(head);
    }
    
    gameover() {
      var x = this.body[this.body.length-1].x;
      var y = this.body[this.body.length-1].y;
      
      if(x > w-1 || x < 0 || y > h-1 || y < 0) {
         return true;
      }
      
      for(var i = 0; i < this.body.length-1; i++) {
          var part = this.body[i];
        if(part.x == x && part.y == y) {
            return true;
        }
      }
      return false;
    }
    
    eat(pos) {
      let x = this.body[this.body.length-1].x;
      let y = this.body[this.body.length-1].y;
      if(x == pos.x && y == pos.y) {
        this.grow();
        return true;
      }
      return false;
    }
    
    display() {
        for(let i = 0; i < this.body.length; i++) {
          fill(0);
        noStroke();
        rect(this.body[i].x, this.body[i].y, 1, 1)
      }
    }
  
  }