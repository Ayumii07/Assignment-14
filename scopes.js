// 1. Global Scope
let num = 5; // global variable
function showNumber() { // function declaration
    console.log(num); // can access global variable
}
showNumber(); // function call
if (true) {
    console.log(num); // accessible inside block
}
console.log(num); // accessible everywhere

// 2. Function Scope
function functionScopeExample() {
    var a = 10;   // function scoped
    let b = 15;   // function scoped
    const c = 20; // function scoped
    console.log(a);
    console.log(b);
    console.log(c);
}
functionScopeExample(); // function call

// 3. Block Scope
if (true) {
    let blockNum = 100;  
    const blockConst = 200; 
    var blockVar = 300;   

    console.log(blockNum);
    console.log(blockConst);
    console.log(blockVar);
}
console.log(blockVar);

// 4. Scope Chain
function outerFunction() {
    let outerValue = 10; // parent scope variable
    function innerFunction() {
        let innerValue = 20; // child scope variable
        console.log(outerValue); // accessed from parent
        console.log(innerValue); // accessed from same scope
    }
    innerFunction();
}
outerFunction();

// 5. Variable Shadowing
let count = 80; // global variable
function shadowExample() {
    let count = 90; // shadows global variable
    console.log(count); 
}
shadowExample();
console.log(count); 
