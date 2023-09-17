const display = document.getElementById("display");
const numbers = document.querySelectorAll(".button[data-num]");
const operators = document.querySelectorAll(".button[data-op]");
const pop = document.getElementById("pop");
const equals = document.getElementById("equals");
const clearCurr = document.getElementById("clearCurr");
const clearAll = document.getElementById("clearAll");

let localArr = [];
let sessionArr = [];

function displayNum(arr) {
    display.textContent = "";
    for(item of arr) {
        display.textContent += item;
    };
};


for (let number of numbers) {
    number.addEventListener("click", function() {
        sessionArr.push(this.dataset.num);
        displayNum(sessionArr);

    })
}



for (let operator of operators) {
    operator.addEventListener("click", function() {
        localArr = localArr.concat(sessionArr);
        sessionArr.length = 0;
        localArr.push(this.dataset.op);
        displayNum([]);
    });
}

pop.addEventListener("click", function(){
    sessionArr.pop();
    displayNum(sessionArr);
});


equals.addEventListener("click", function(){
    localArr = localArr.concat(sessionArr);
    sessionArr.length = 0;
    let str = localArr.join("");
    let result = eval(str);
    localArr = [result];
    displayNum(localArr);
})

clearAll.addEventListener("click", function() {
    localArr.length = 0;
    sessionArr.length = 0;
    displayNum(localArr);
});


clearCurr.addEventListener("click", function() {
    sessionArr.length = 0;
    displayNum(sessionArr);
})





