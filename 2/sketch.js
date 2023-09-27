function setup()
{
  createCanvas(windowWidth, windowHeight);
  background('darkblue');
}

function draw()
{
  if(millis()>5000)
  {
    background('darkred');
  }
}