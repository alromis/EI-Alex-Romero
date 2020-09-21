//decalrem les variables
var fade;
var fadeAmount = 0.8;
var font;
var random1, random2, random3;
var opacity = 10;
var comptador = 0;
var comptador2 = 0;
var valor = 0;
var bola1, bola2, bola3, bola4, bola5, bola6, bola7, bola8, bola9, bola10, bola11, bola12, bola13, bola14, bola15;

//carreguem font 
function preload() {
  
  font = loadFont('items/ResonancesFont.ttf');
}

//inicialitzem el canvas i el fade
function setup() {
  createCanvas(282, 400);
  fade = 0;
   
  
  bola1 = new Bola(40,100, random1, random2, random3,opacity); 
  bola2 = new Bola(40,200, random1, random2, random3,opacity);
  bola3 = new Bola(40,300, random1, random2, random3,opacity);
  bola4 = new Bola(145, 45, random1, random2, random3,opacity);
  bola5 = new Bola(118, 118, random1, random2, random3,opacity);
  bola6 = new Bola(100, 195, random1, random2, random3,opacity);
  bola7 = new Bola(165, 130, random1, random2, random3,opacity);
  bola8 = new Bola(250, 45, random1, random2, random3,opacity);
  bola9 = new Bola(100,295, random1, random2, random3,opacity);
  bola10 = new Bola(165, 230, random1, random2, random3,opacity);
  bola11 = new Bola(250, 145, random1, random2, random3,opacity);
  bola12 = new Bola(90, 350, random1, random2, random3,opacity);
  bola13 = new Bola(170, 270, random1, random2, random3,opacity);
  bola14 = new Bola(250, 250, random1, random2, random3,opacity);
  bola15 = new Bola(190, 350, random1, random2, random3,opacity);
  
}

//cos del codi
function draw() {
  //donem color al fons i carreguem la font
  opacity= opacity + 0.1;
  background(0,0,0,opacity);
  textFont(font);
  backCanvas(valor);
  //Efecte del fade
  fadeEffect();

  if(comptador > 100){
    bola1.display();
    bola1.move();

    bola2.display();
    bola2.move();

    bola3.display();
    bola3.move();

    bola4.display();
    bola4.move();

    bola5.display();
    bola5.move();

    bola6.display();
    bola6.move();

    bola7.display();
    bola7.move();

    bola8.display();
    bola8.move();

    bola9.display();
    bola9.move();

    bola10.display();
    bola10.move();

    bola11.display();
    bola11.move();

    bola12.display();
    bola12.move();

    bola13.display();
    bola13.move();

    bola14.display();
    bola14.move();

    bola15.display();
    bola15.move();
  }
  
  if(comptador > 500){
  //executem les funcions de text de les cantonades i títol
    lletres();
    textCantonades();
}
  comptador2++;
  comptador++;
  
}


//funció pel text de les cantonades
function textCantonades(){
  textFont(font);
  textSize(7)
  fill(237, 40, 56, fade)
  text("ELECTRONIC",10,15);
  text("MUSIC",10,25);
  text("FESTIVAL",10,35);
  text("#7",10,45);
  
  text("DIJON",250,360);
  text("DU 07 AU IO",230,370);
  text("NOVEMBRE",235,380);
  text("2013",255,390);
  
}

//funció del títol
function lletres(){
  textFont(font);
  textSize(35)
  fill(255, 255, 255, fade)
  
  text("R", 115,35)
  text("É", 140,75)
  text("S", 115,115)
  text("O", 140,155)
  text("N", 115,195)
  text("A", 140,235)
  text("N", 115,275)
  text("C", 140,315)
  text("E", 115,350)
  text("S", 140,390)
}

//creem l'efecte Fade per a les lletres
function fadeEffect(){
  if (fade<0) fadeAmount=0.8; 
  
 
  if (fade>300) fadeAmount=-2.5; 
 
  fade += fadeAmount; 
}
function backCanvas(valor){
  background(valor);
  
}

function mousePressed() {
  setup();
  comptador = 0;
  comptador2 = 0;
}
function deviceShaken() {
  setup();
  comptador = 0;
  comptador2 = 0;
}