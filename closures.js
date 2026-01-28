// 1. Basic Closure
function parent() {
    let message = "Hi";

    function child() {
        console.log(message);
    }
    // returning inner function
    return child;
}
// storing returned function
const showMsg = parent();
showMsg(); // calling the returned function

// 2. Closure with Counter
function createCounter() {
    let total = 0;

    function addOne() {
        total++;
        console.log(total);
    }
    return addOne;
}
const myCounter = createCounter();
myCounter();
myCounter();
myCounter();

// 3. Data Privacy Using Closures
function secretBox() {
    let secret = "HIDDEN";
    function getSecret() {
        return secret;
    }
    function setSecret(newValue) {
        secret = newValue;
    }
    // returning functions as object
    return {
        getSecret,
        setSecret
    };
}
// creating object
const safe = secretBox();
// accessing private data
console.log(safe.getSecret());
safe.setSecret("NEW SECRET");
console.log(safe.getSecret());

// 4. Closures with Loop
let functions = [];
// loop using let
for (let i = 1; i <= 4; i++) {
    functions.push(function () {
        console.log(i);
    });
}
// calling each function
functions[0]();
functions[1]();
functions[2]();
functions[3]();