function setup()
{
  createCanvas(windowWidth, windowHeight);
  fill(255);
}

let xpos=0;

function draw()
{
  background('gold');
  ellipse(xpos, 50, 50);
  if(xpos<=windowWidth)
  {
    xpos+=10; 
  }
  else if(xpos>0)
  {
    xpos-=10;
  }
}