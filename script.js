/* global TinyTurtle */
/* global forward */
/* global right */
/* global stamp */
/* global HOUSE */

TinyTurtle.apply(window);

var step = 1

function square(x){
    forward(x);
    right(90);
    forward(x);
    right(90);
    forward(x);
    right(90);
    forward(x);
    right(90);
    forward(x);
}

function triangle(){
    right(90);
    forward(30);
    right(270);
    forward(50);
    right(225)
    forward(71)
    right(225);
    forward(25);
}

function HOUSE(){
    right(140);
    forward(30);
    right(40);
    forward(30);
    right(90);
    forward(40);
    right(90);
    forward(30);
    right(40);
    forward(31);
  
}

function circle(){
   var step;
    for (step = 0; step < 10; step++) {
        right(15);
        forward(10);
        step -= 1
        }
    }
    
    
    
function shape(size, angle){
    right(angle);
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size);
    right(angle);
    forward(size);
}

// Type your function call below

//triangle();
//square(10);
//HOUSE();
//circle();
shape(20, 50);
stamp();
