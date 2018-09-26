//Boton de referencias
var botRef;


//Variable tipografia
var tipografia;
var tiporegular;

//Variable año actual
var anoActual;

//Foto referencias
var fotoRef;
var imgTexto;

//Audios
var audio1;
var audio2;
var audio3;
var audio4;

//FotosMapas
var foto1797;
var foto1880;
var foto1980;
var foto2018;
//Fotos de 1797
var foto17971;
var foto17972;
//Fotos de 1880
var foto18801;
var foto18802;
var foto18803;
var foto18804;
//Fotos de 1954
var foto19541;
var foto19542;
var foto19543;

//Fotos de 2018
var foto20181;
var foto20182;
var foto20183;
var foto20184;


//Barra que da el año
var barra;
var barraY = 65.375;


//Textos de script
var texto1;
var texto2;
var texto3;
var texto4;

function setup() {

}

function preload() {

  //Carga la tipografia
  tipografia = loadFont("Tipografia/DaxBold.ttf")
  tiporegular = loadFont("Tipografia/DaxRegular.ttf")

  //Carga la foto de la referencias
  fotoRef = loadImage("FotoRef/Referencias.png")
  imgTexto = loadImage("FotoRef/texto.png")

  //Carga de las fotos de los mapas
  foto1797 = loadImage("Mapas/1797.png")
  foto1880 = loadImage("Mapas/1880.png")
  foto1980 = loadImage("Mapas/1954.png")
  foto2018 = loadImage("Mapas/2018.png")


  //Carga de las fotos de 1797
  foto17971 = loadImage("Fotografias1797/1.png")
  foto17972 = loadImage("Fotografias1797/2.png")
  //Carga de las fotos de 1880
  foto18801 = loadImage("Fotografias1880/1.png")
  foto18802 = loadImage("Fotografias1880/2.png")
  foto18803 = loadImage("Fotografias1880/3.png")
  foto18804 = loadImage("Fotografias1880/4.png")

  //Carga de las fotos de 1954
  foto19541 = loadImage("Fotografias1954/1.png")
  foto19542 = loadImage("Fotografias1954/2.png")
  foto19543 = loadImage("Fotografias1954/3.png")

  //Carga de las fotos de 2018
  foto20181 = loadImage("Fotografias2018/1.png")
  foto20182 = loadImage("Fotografias2018/2.png")
  foto20183 = loadImage("Fotografias2018/3.png")
  foto20184 = loadImage("Fotografias2018/4.png")

  //Carga los audios
  audio1 = loadSound("Audios/1.mp3")
  audio2 = loadSound("Audios/2.mp3")
  audio3 = loadSound("Audios/3.mp3")
  audio4 = loadSound("Audios/4.mp3")

  //Carga los fextos del script
  texto1 = loadImage("FotosTextos/Texto1.png")
  texto2 = loadImage("FotosTextos/Texto2.png")
  texto3 = loadImage("FotosTextos/Texto3.png")
  texto4 = loadImage("FotosTextos/Texto4.png")
}

function draw() {
  createCanvas(1280, 1024);
  background(150);

  fill(0);
  textSize(29);
  textFont(tipografia);
  text("1797", 59, 75);
  text("1880", 59, 147);
  text("1954", 59, 219);
  text("2018", 59, 290);
  
  


  textSize(20)
  textFont(tiporegular);
  text("¡Elige el año que desees ver y mira las diferencias!", 20, 22)
  fill(255);
  rect(23.827, 47.25, 21, 251.299)
  arc(34.5, 49, 21, 21, PI, 2 * PI)
  arc(34.5, 297.708, 21, 21, 0, PI)
  
  textSize(15)
  fill(0)
  text("Más información", 198, 310)

  //Boton referencias
  fill(255, 100, 100)
  rect(1204, 995, 75, 28)
  textSize(20);
  fill(0)
  text("REFERENCIAS", 1090, 1020)

  //Boton texto
  image(imgTexto, 207, 216, 80, 80)

  //Texto que da instrucciones


  fill(255, 100, 100)
  barra = rect(12.993, barraY, 42.667, 8)

  if (mouseIsPressed) {
    if (mouseX > 12.993 && mouseX < 55.66) {
      if (mouseY > 65.375 && mouseY < 280.708) {
        barraY = mouseY;

        if (mouseY > 65.375 && mouseY < 97.9) {
          anoActual = 1797;
        } else if (mouseY >= 97.9 && mouseY < 171.9) {
          anoActual = 1880;
        } else if (mouseY >= 171.9 && mouseY < 246.9) {
          anoActual = 1980;
        } else if (mouseY >= 246.9 && mouseY < 280.4) {
          anoActual = 2018;
        }

      }

    }
  }

  if (anoActual == 1797) {
    image(foto1797, 318, 30, 928, 650)
    image(foto17971, 132, 694, 432, 344)
    image(foto17972, 677, 694, 484, 322)

    if (audio2.isPlaying() || audio3.isPlaying() || audio4.isPlaying()) {
      audio2.stop();
      audio3.stop();
      audio4.stop();
    }
    if (audio1.isPlaying() == false) {
      audio1.play();
    }
    
    if(mouseIsPressed){
     if(mouseX > 207 && mouseX < 286)
     {
       if(mouseY > 217 && mouseY < 297)
       {
        image(texto1, 0, 0) 
       }
     }
    }
    
  } else if (anoActual == 1880) {
    image(foto1880, 318, 30, 928, 650)
    image(foto18802, 27, 332, 272, 350)
    image(foto18801, 26, 691, 440, 311)
    image(foto18803, 481, 691, 159, 294)
    image(foto18804, 643, 808, 609, 172)

    if (audio1.isPlaying() || audio3.isPlaying() || audio4.isPlaying()) {
      audio1.stop()
      audio3.stop()
      audio4.stop()
    }
    if (!audio2.isPlaying()) {
      audio2.play();
    }
    
     if(mouseIsPressed){
     if(mouseX > 207 && mouseX < 286)
     {
       if(mouseY > 217 && mouseY < 297)
       {
        image(texto2, 0, 0) 
       }
     }
    }
    
  } else if (anoActual == 1980) {
    image(foto1980, 318, 30, 928, 650)
    image(foto19541, 8, 383, 296.7, 298)
    image(foto19542, 331, 686, 305.9, 318.7)
    image(foto19543, 694, 685, 495, 314)

    if (audio1.isPlaying() || audio2.isPlaying() || audio4.isPlaying()) {
      audio2.stop()
      audio4.stop()
      audio1.stop()
    }
    if (!audio3.isPlaying()) {
      audio3.play();
    }
    
     if(mouseIsPressed){
     if(mouseX > 207 && mouseX < 286)
     {
       if(mouseY > 217 && mouseY < 297)
       {
        image(texto3, 0, 0) 
       }
     }
    }

  } else if (anoActual == 2018) {
    image(foto2018, 318, 30, 928, 650)
    image(foto20181, 9.6, 426.4, 303, 219)
    image(foto20182, 5, 724.4, 364.5, 242.6);
    image(foto20183, 351.6, 725.4, 469.7, 250.5)
    image(foto20184, 800, 727, 466.4, 246.6)

    if (audio1.isPlaying() || audio2.isPlaying() || audio3.isPlaying()) {
      audio2.stop()
      audio3.stop()
      audio1.stop()
    }
    if (!audio4.isPlaying()) {
      audio4.play();
    }
    
     if(mouseIsPressed){
     if(mouseX > 207 && mouseX < 286)
     {
       if(mouseY > 217 && mouseY < 297)
       {
        image(texto4, 0, 0) 
       }
     }
    }
  }

  if (mouseIsPressed) {
    if (mouseX > 1204 && mouseY > 995) {
      fill(255);
      rect(-5, -5, width + 10, height + 10)
      image(fotoRef, 0, 0)


    }
  }
}