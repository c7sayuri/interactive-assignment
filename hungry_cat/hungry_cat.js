let img;
let spacePressed;
let imgArray = []; //bowl 
let catArray = []; //cat
let counter = 0; //images to display
let currentImg; //which cat is displayed

function setup() {
  createCanvas(windowWidth, windowHeight);
  currentImg = catArray[0];
}

function preload (){
  imgArray[0] = loadImage('food.png');
  imgArray[1] = loadImage('food2.png');
  imgArray[2] = loadImage('food3.png');
  imgArray[3] = loadImage('food4.png');
  imgArray[4] = loadImage('food5.png');
  imgArray[5] = loadImage('food6.png');
  catArray[0] = loadImage('cat.png');
  catArray[1] = loadImage('cat3.png');
}

function draw() {
  background(120,10,180);
  imageMode(CENTER); //Center the bowl
  image(currentImg, mouseX, mouseY,400,400);//This is your cat! Move him around.
  image(imgArray[counter], 950,650,550,550);//This is your bowl of food. Hit the spacebar and see what happens.
}

function mouseClicked(){
  if (mouseButton === LEFT) {
    if (currentImg == catArray[1]) { //This will change the cat's face when you click on it.
    currentImg = catArray[0];
    }
    else
    {
    currentImg = catArray[1];  //Keep the current cat
    }
   }
  }

function keyPressed() {
  if (keyCode === 32) { //spacebar
    counter++; 
    if (counter === imgArray.length) { 
      counter = 0; 
    }
  }
}
