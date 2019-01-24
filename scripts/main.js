function setup() {
  var cnv = createCanvas(windowWidth-1, windowHeight-1);
  // var cnv = createCanvas(windowWidth, windowHeight);
  cnv.id("p5");
  background(0,0,0);
  // background(255,255,255);
  // frameRate(0.1)
  noLoop()
}

function draw() {
  for(var i = 0; i<15; i++){
    var col =  Math.round(Math.random()*2.99999)
    if (col==2){
      stroke(255,60,60)
    } else if (col==1) {
      stroke(255,255,60)
    } else{
      stroke(60,60,255)
    }

    var x = Math.random()*0.75*windowWidth+0.125*windowWidth;
    var y = Math.random()*0.75*windowHeight+0.125*windowHeight;
    var w = 0.75*Math.random()*windowWidth
    var h = 0.75*Math.random()*windowHeight
    var x = Math.random()*0.75*windowWidth+0.125*windowWidth;
    var y = Math.random()*0.75*windowHeight+0.125*windowHeight;
    noFill()
    arc(x,y,w,h,2*Math.random()*PI,2*PI*Math.random())
  }

  return
}
