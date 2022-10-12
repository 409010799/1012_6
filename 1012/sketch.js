function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  stroke(255)
  noFill()
  rectMode(CENTER)

  for(var j=0;j<(height/50);j++){
    for(var i=0;i<(width/50);i=i+1)
    {
      ellipse(25+(i=50),25+(j=50),50)
      rect(25+(i*50),25+(j=50),50)
      ellipse(50+(i*50),50+(j=50),25)
    }
  }

}