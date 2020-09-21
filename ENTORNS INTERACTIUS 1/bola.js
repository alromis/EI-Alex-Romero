var diametre, posX, posY, velocitat;

class Bola{
  constructor(px,py, opacity)
  {
  //background(0);
   this.diametre = 40; 
   this.posX = random(width);
   this.posy = random(height);
   this.velocitat = random(1,10);
   this.random1 = 255
   this.random2 = random(80,130);
   this.random3 = random(80,130);
   this.opacitat = opacity;
  
    
  }
  
  random1(){
    return random(0,255);
    
  }
  random2(){
    random(0,255);
    
  }
  random3(){
    random(0,255);
    
  }

  display(){
    noStroke();
    fill(this.random1, this.random2, this.random3, this.opacitat);
    ellipse(this.posX, this.posy, this.diametre, this.diametre);
    
  }
  
  move() {
    
    this.posX += random(-this.velocitat, this.velocitat);
    this.posY += random(this.velocitat, this.velocitat);
  
  }

  posxreturn(){
   return this.posX; 
  }
  
  posyreturn(){
   return this.posY; 
  }


}