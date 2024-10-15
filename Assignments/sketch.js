function setup() {
  createCanvas(1080, 1080);
  noLoop();
}

function draw() {
  background(220);
  noStroke();

  //creazione di 3 griglie di quadrati (grandi, medi, piccoli)


  //quadrati grandi
  let columns = 9; 
  let rows = 9; 
  let rectSize = 120;
  let colors= ["#ffb746","#bb2f76", "#c3ff43"] //creazione di un array "colors" di 3 colori 

  //determinazione posizione rettangoli grandi tramite il loop "for"
  for (let i=0; i<columns; i++){ //impostazione variabile "i" per le colonne

    for (let j=0; j<rows; j++){ //impostazione variabilie "j" per le righe 
      let x = i * rectSize;
      let y = j * rectSize;
      let randomColor = random(colors); //impostazione della variabile "randomColor" che corrisponde a un
      //colore random tra i 3 contenuti nell'array "colors"
      fill(randomColor);
      rect(x, y, rectSize, rectSize);  // Disegna il rettangolo nella posizione (x, y)
    }
  }


  //quadrati medi   
  let columns1 = 9;  
  let rows1 = 9; 
  let rectSize1 = 80; 
  let gapX=40; //spazio tra i due quadrati lungo le x
  let gapY=40; //spazio tra i due quadrati lungo le y
  let offsetTop=20; //margine in alto 
  let offsetLeft=20; //margine a sinistra (e di conseguenza a destra)

  //determinazione posizione rettangoli medi tramite il loop "for"
  for (let r=0; r<columns1; r++){ //impostazione variabile "r" per le colonne
  
    for (let c=0; c<rows1; c++){ //impostazione variabilie "c" per le righe
      let x=r*(rectSize1+gapX) + offsetLeft;
      let y=c*(rectSize1+gapY) + offsetTop;
      let randomColor = random(colors);
      fill(randomColor);
      rect(x,y,rectSize1,rectSize1);
    }
  }
  
  //quadrati piccoli 
  let columns2 = 9; 
  let rows2 = 9; 
  let rectSize2 = 40; 
  let gapX2=80; 
  let gapY2=80; 
  let offsetTop2=40; 
  let offsetLeft2=40; 

  //determinazione posizione quadrati piccoli tramite il loop "for"
  for (let m=0; m<columns2; m++){ //impostazione variabile "m" per le colonne
  
    for (let n=0; n<rows2; n++){ //impostazione variabilie "n" per le righe
      let x=m*(rectSize2+gapX2) + offsetLeft2; 
      let y=n*(rectSize2+gapY2) + offsetTop2;
      let randomColor = random(colors);
      fill(randomColor);
      rect(x,y,rectSize2,rectSize2);
    }
  }
 
}
