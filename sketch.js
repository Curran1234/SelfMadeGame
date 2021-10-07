const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ball,ballImage;
var backgroundImg;
var slingshot;
var target,target2,target3,targetImg,target2Img,target3Img;
var target4,target5,target4Img,target5Img
var sound, soundHolder

var gameState = "onSling";
var score = 0;

function preload() {
    bg = loadImage("background.jpg")

    soundHolder = loadSound("sound.wav")

    ballImage = loadImage("football clear.jpeg")

    targetImg = loadImage("targetclear.jpeg")
    target2Img = loadImage("targetclear.jpeg")
    target3Img = loadImage("targetclear.jpeg")
    target4Img = loadImage("targetclear.jpeg")
    target5Img = loadImage("targetclear.jpeg")
}

function setup(){
    var canvas = createCanvas(displayWidth,displayHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);


    ball = createSprite(200,400,50,50);
    ball.addImage(ballImage)
    ball.scale = 0.7

    target = createSprite(500,600,50,50)
    target.addImage(targetImg)
    target.scale=0.7
    
    target2 = createSprite(500,200,50,50)
    target2.addImage(target2Img)
    target2.scale= 0.7

    target3 = createSprite(900,400,50,50)
    target3.addImage(target3Img)
    target3.scale= 0.7


    target4 = createSprite(1300,600,50,50)
    target4.addImage(targetImg)
    target4.scale=0.7
    
    target5 = createSprite(1300,200,50,50)
    target5.addImage(target2Img)
    target5.scale= 0.7

    //log6 = new Log(230,180,80, PI/2);
   // slingshot = new SlingShot(ball.body,{x:200, y:300});
}

function draw(){
       background(bg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    drawSprites()
    //log6.display();

    target.display();

    target2.display();

    target3.display();

    target4.display();
    
    target5.display();
   // slingshot.display();    

   if(keyDown("RIGHT_ARROW")){
       ball.x = ball.x+5
   }
   if(keyDown("LEFT_ARROW")){
    ball.x = ball.x-5
}
if(keyDown("UP_ARROW")){
    ball.y = ball.y-5
}
if(keyDown("DOWN_ARROW")){
    ball.y = ball.y+5
}

   if (ball.isTouching(target)){
        score = score + 1
        soundHolder.play();
   }

   if (ball.isTouching(target2)){
        score = score+1
        soundHolder.play();
   }
   if (ball.isTouching(target3)){
    score = score+1
    soundHolder.play();
}
if (ball.isTouching(target4)){
    score = score + 1
    soundHolder.play();
}
if (ball.isTouching(target5)){
    score = score + 1
    soundHolder.play();
}

if (score>1){
    fill("red")
    text("YOU LOSE",800,50)
}


}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    //slingshot.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && ball.body.speed<1){
        ball.trajectory = [];
        Matter.Body.setPosition(ball.body, {x: 200 , y: 50});
        //slingshot.attach(ball.body);
    }
}

