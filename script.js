/* global TinyTurtle */
/* global forward */
/* global right */
/* global stamp */
/* global HOUSE */
/* global x */
/* global y */
/* global a */
/* global b */

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

function hexagon(){
    for(var i = 0; i < 6; i += 1){
        forward(50);
        right(72);
    }
    //right(30);
    //forward(80);
};

//-------------------------------- ART ----------------------------------------//

function art(x = Math.ceil(Math.random() * 100) , y = Math.ceil(Math.random() * 100)){
    
    console.log(x);
    console.log(y);
    
    function art2(a = Math.ceil(Math.random() * 100), b = Math.ceil(Math.random() * 100)){
    console.log(a);
    console.log(b);
        for(var i = 0; i < x; i += 1){
            forward(a);
            right(b);
        }
        right(a * b);
    }
    for(var i = 0; i < y; i += 1){
            art2();
        }
    
}
// Type your function call below ---------------------------------------------//

//triangle();
//square(10);
//HOUSE();
//circle();
//shape(30, 50);
//hexagon();
art();
stamp();
