// Donghyun Kang
// Track Mouse in 4 Squares Exercise
// CS099
// Spring 2020


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  let x = mouseX;
  let y = mouseY;
  
  let horizontal = width / 2;
  let vertical = height / 2;
  push();
   noStroke();
   fill('beige');
   rect(horizontal,0,horizontal,vertical);
   fill('orange');
   rect(0,0,horizontal,vertical);
   fill('pink');
   rect(0,horizontal,horizontal,vertical);
   fill('yellow');
   rect(horizontal,horizontal,horizontal,vertical);
  pop();
  
  fill('Blue');
  if(x < horizontal && y < vertical) {
    rect(horizontal/8,vertical/8,horizontal/2,vertical/4);
  }else if(x > horizontal && y < vertical){
  ellipse(12*horizontal/8,3*vertical/8,horizontal/2,vertical/4);
  }else if(x < horizontal && y > vertical){
    circle(3*horizontal/8,12*vertical/8,horizontal/2);
  }else if(x > horizontal && y > vertical){
    square(10*horizontal/8,10*vertical/8,horizontal/2); 
  }else{
    console.log('Please select area');
  }
}