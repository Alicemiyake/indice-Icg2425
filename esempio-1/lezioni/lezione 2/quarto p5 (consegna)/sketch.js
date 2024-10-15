//proviamo a muovere la barchetta
let boatX = 200; // Posizione iniziale della barchetta (centro orizzontale)
let boatSpeed = 0.5; // Velocità di movimento della barchetta

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("lightblue");
    //onde piccole
    stroke("no stroke")
    strokeWeight(1)
    fill("#0047ab");
    circle(20,350,150);
    fill("#0047ab");
    circle(100,350,150);
    fill("#0047ab");
    circle(180,350,150);
    fill("#0047ab");
    circle(270,350,150);
    fill("#0047ab");
    circle(350,350,150);
    //barchetta
    fill("white");
    triangle(boatX + 65, 295, boatX - 65, 295, boatX, 370);
    fill("white");
    triangle(boatX + 35, 287, boatX - 38, 287, boatX, 230);
    stroke("black");
    strokeWeight(4)
    line(boatX, 230, boatX, 287);
    //onde blu
    stroke("white")
    strokeWeight(1)
    fill("darkblue");
    circle(20,400,200);
    fill("darkblue");
    circle(150,400,200);
    fill("darkblue");
    circle(300,400,200);
    fill("darkblue");
    circle(450,400,200);

    
    
    // Muovi la barchetta
    boatX += boatSpeed; // Aumenta la posizione x della barchetta
    // Ripristina la posizione se esce dal canvas
    if (boatX > width + 50) { // Se la barchetta esce a destra
    boatX = -50; // Riportala a sinistralet boatSpeed = 2; // Velocità di movimento della barchetta
    }

}

