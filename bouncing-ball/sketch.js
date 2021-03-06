
function setup() {
  let canvas = createCanvas(600, 400);
  canvas.parent("sketch");
  background(54,123,12);
}

let posX = 40;
let posY = 40;
let goX = 1;
let goY = 1;

function draw(){
  background('#2D882D');
  stroke('#AA6C39');
  fill('#882D61');
  ellipse(posX,posY,20,20);

  goX ? posX += 2 : posX -= 2;
  goY ? posY += 2 : posY -= 2;

  if(posX + 10 > width){ goX = 0; }
  if(posX - 10 < 0){ goX = 1; }
  if(posY + 10 > height){ goY = 0; }
  if(posY -10 < 0){ goY = 1; }
}