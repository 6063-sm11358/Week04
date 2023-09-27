function setup()
{
  createCanvas(windowWidth, windowHeight);
  background('gold');
  fill(0);
  noStroke();
}

function draw()
{
  rect(200, 200, 200, 200);
}

function mouseClicked()
{
  fill(random(100,200),0,0);
  rect(mouseX,mouseY,random(200,250),random(200,250));
}