/* global TinyTurtle */
/* global forward */
/* global right */
/* global stamp */
/* global HOUSE */

TinyTurtle.apply(window);

var step = 1

function square(){
    forward(50);
    right(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
    forward(50);
    right(90);
    forward(50);
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
    for (step = 0; step < 2; step++) {
        // Runs 5 times, with values of step 0 through 4.
        right(15);
        forward(10);
        step -= 1
        }
    }

// Type your function call below

//triangle();
//square();
//HOUSE();
circle();
stamp();
