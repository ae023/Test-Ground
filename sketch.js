let angle = 0;
let flower;

function preload() {
    flower = loadModel('P5objTest.obj');
    cube = loadModel('cube.obj');
}

function setup() {
    createCanvas(800, 800, WEBGL);
    //background(255);
  }
  
  function draw() {
    background(255);
    ambientLight(100);
    directionalLight(255,0,102,0,1,0);
    // rotateX(mouseX/100);
    // rotateY(mouseY/100);
    //translate(mouseX/5, mouseY/5);
    rotateY(frameCount * 0.005);
    rotateX(180);
    scale(200);
    model(flower);
    angle += 0.03;
  }