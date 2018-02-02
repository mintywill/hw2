var a = random (80,270)

stroke(0,0,0);
fill(255, 238, 0)
stroke(0,0,0)
strokeWeight(10)
rect(5, 5, a, a);

stroke(0,0,0);
fill(255,0,0)
stroke(0,0,0)
strokeWeight(10)
rect(a+5, a+5, 330-a, 330-a);

var b = random (30,a+5)
stroke(0,0,0);
fill(20, 68, 207)
stroke(0,0,0)
strokeWeight(10)
rect(a+5, 5, 330-a, a);

var b = random (30,a+5)
stroke(0,0,0);
fill(255,255,255)
stroke(0,0,0)
strokeWeight(10)
rect(a+5, 5, 330-a, b-15);

var c = random (40,80)
stroke(0,0,0);
fill(255,255,255)
stroke(0,0,0)
strokeWeight(10)
rect(a+5, 5, c-20, b-15);

stroke(0,0,0);
fill(255,255,255)
stroke(0,0,0)
strokeWeight(10)
rect(5, a+5, a, 330-a);

stroke(0,0,0);
fill(20, 68, 207)
stroke(0,0,0)
strokeWeight(10)
rect(5, a+5, b-10, 330-a);
