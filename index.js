// These are the variables that are tied to the "counter" html elements. We struggled at first because we had called the element using a class and then tried to use getElementByClass and found out it 
// doesn't exist. So we instead changed the html to include the Id's we wanted to target. 
let homeNumber= document.getElementById("homeCounter");
let guestNumber = document.getElementById("guestCounter");
// This is the increment amount. We created these variables to give the function a basis to increment to. Without these the function cannot increment anything. It needs an object to modify.
let homeCounter= 0;
let guestCounter = 0;
//These are the functions that are used to increment onto the counter, 
function add1(){
    homeCounter += 1 
    homeNumber.innerText = homeCounter
    
};

function addguest1(){
    guestCounter += 1 
    guestNumber.innerText = guestCounter
};
function add2(){
    homeCounter += 2 
    homeNumber.innerText = homeCounter
};

function addguest2(){
    guestCounter += 2 
    guestNumber.innerText = guestCounter
};
function add3(){
    homeCounter += 3 
    homeNumber.innerText = homeCounter
};
function addguest3(){
    guestCounter += 3 
    guestNumber.innerText = guestCounter
};
//  This reset button we inserted an icon for aesthetics. We added the onclick property on the html document. Then we created a function using the name we gave that property and made it equal to 0 for 
// both the inner text and the counter so that it fully resets
function guestReset(){
    guestCounter = 0
    guestNumber.innerText = 0
};

function homeReset(){
    homeCounter = 0
    homeNumber.innerText = 0
};
