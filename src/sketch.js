let leafY = 0;
let leafYMove = 0;
let leafRotate = 0;
let leafRotateVariable = 0;
let ripple = 0;
let rippleVariable = 0.05;
let rippleVariable2 = 0.02;
let leafLand = 0;
let fishMove = 0;
let clicked = false;

function setup() {
  // These lines are fitting our canvas
  // where we want in the DOM
  // so that we can manipulate its style
  // easier
  let myCanvas = createCanvas(400, 400);
  myCanvas.parent("canvas-parent");
  angleMode(DEGREES);
}

function draw() {
  background('#90E0F5');
  
  //fish
  push();
  translate(160 - fishMove, 370);
    if (leafLand >= 1){
     fishMove = fishMove + 2;
   }
  scale(0.6)
  drawFish();
  pop();
  
  //water ripple
  push();
  translate(200, 330);
  scale(0 + ripple);
   if (leafLand >= 1){
     ripple = ripple + rippleVariable;
   }
  drawRipple();
  
  scale(0 + ripple);
   if (leafLand >= 1){
     ripple = ripple + rippleVariable2;
   }
  drawRipple();
  
  pop();
  
  //background
  push();
  fill('#419BE9');
  rect(0,0, 400, 300);
  pop();
  
  //clouds
  push();
  drawClouds(100, 125, 1); 
  drawClouds(300, 50, 0.6);
  drawClouds(275, 175, 0.8)
  pop();
  
  
  push();

  translate(200, -50+ leafY);
    if (clicked){
      leafY = leafY + leafYMove;
        if(leafY == 370){
          leafYMove = 0;
          leafLand+=1;
        }
    }
    rotate(leafRotate+leafRotateVariable);
    if (clicked){
      leafRotate = leafRotate+leafRotateVariable;
        if (leafRotate==90){
          leafRotateVariable = 0;
        }
    }
  drawLeaf();
  pop();

}


function drawLeaf(){
  push();
  fill('#66A887')
  ellipse(0,0,20, 50);
  triangle(0,20, 3, 35, -3, 35);
  line(0,20, 0,-20);
  pop();
  
}

function drawClouds(cloudX, cloudY, cloudScale){
  push();
  translate(cloudX, cloudY, cloudScale)
  scale(cloudScale);
  noStroke();
  ellipse(0,0, 200, 50);
  ellipse(0,-20, 70, 70);
  ellipse(50,-10, 50, 50);
  ellipse(-70,-30, 70, 40);
  pop();
}

function drawRipple(){
  push();
  noFill();
  strokeWeight(3);
  stroke('#DDF8FF');
  ellipse(0,0, 100, 50)
  pop();
  
}

function drawFish(){
  //main body
  
  fill('#BDA678');
  triangle(-5, -20, 20, -30, 30, -15);
  triangle(30,0, 70, -25, 70, 20);
  ellipse(0,0, 100, 40);
  triangle(0, 10, 30, 20, 30, 10);

  
  //gill
  push(); 
  noFill();
  arc(-40,-10, 70, 70, 0, QUARTER_PI),
  pop();
  
  //eye
  push();    
  fill(0);
  ellipse(-25, -5, 10, 10);
  pop();
  
}

function mouseClicked()
{
  
  clicked = !clicked;
  leafYMove += 5;
  leafRotateVariable += 1.5;

}


