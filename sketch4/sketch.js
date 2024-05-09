let ellipseColor;
let buttonSize = 40; // Size of each button
let buttonGap = 10; // Gap between buttons
var flowerno;
let buttonColors = ['#F192BD', '#FB6C4A', '#FECA1F', '#649BEC', '#5DAF73', '#834AC1'];
let img;
let button;

let canvParent = document.getElementById("button-div")
let saveParent = document.getElementById("save-div")

function preload() {
  flower1 = loadImage('animal-07.png');
  flower2 = loadImage('animal-08.png');
  flower3 = loadImage('animal-09.png');
  flower4 = loadImage('animal-10.png');
  flower5 = loadImage('animal-11.png');
  flower6 = loadImage('animal-12.png');
  bg = loadImage('farm.jpg')
}


function setup() {
  createCanvas(800, 500);
  background(bg)
  
  noStroke();

    // Create a button
    button = createButton('Save');
  
    button.mousePressed(saveImage);
    button.addClass('button-style');
    button.parent(saveParent)

  ellipseColor = color(255, 0, 0);
  
  let colors = [flower1, flower2, flower3, flower4, flower5, flower6];
  
  // Create buttons for each color
  for(let i = 0; i < colors.length; i++) {
    let buttonY = i * (buttonSize + buttonGap) + buttonGap; // Calculate Y position for each button
    let buttonX = width - buttonSize - buttonGap; // X position for buttons
    let button = createButton('').mousePressed(() =>     flowerno=i);
    // button.position(buttonX, buttonY);
    button.size(buttonSize, buttonSize);
    button.style('background-color', buttonColors[i]);
    button.parent(canvParent)
    console.log(colors[i])
  }
  
  
}

function draw() {
  // No need to draw the ellipse in draw() anymore, it will be drawn on mouse click
}

  function saveImage(){
    save("myimage.png");
  }

function mousePressed() {
  console.log(flowerno)
  
  if(mouseX>750 && mouseY<300){
 
  }
  
  else{
  
  if (flowerno == 0){
      image(flower1, mouseX-80, mouseY-100, 200,200);
  }
    
  if (flowerno == 1){
      image(flower2, mouseX-100, mouseY-65, 170,170);
  }

  if (flowerno == 2){
     image(flower4, mouseX-120, mouseY-120, 180,150);
  }
    
  if (flowerno == 3){
      image(flower5, mouseX-60, mouseY-110, 150,150);
  }
    
  if (flowerno == 4){
      image(flower3, mouseX-40, mouseY-60, 100,100);
  }
    
  if (flowerno == 5){
      image(flower6, mouseX-100, mouseY-100, 230,200);
  }


  } 
  
}

function changeColor(newColor) {
  ellipseColor = newColor;
}