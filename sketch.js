const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world;

var lady1;
var bg = "Day_background.png";
var backgroundImg;

function preload()
{
  getBackgroundImg();
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

  lady1 = new Lady(560, 280, 50, 90);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  Engine.update(engine);

  lady1.display();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=0600 && hour<=19){
      bg = "Day background.png";
  }
  else{
      bg = "Night background.png";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}