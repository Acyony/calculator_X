//-=^.^-=---doAdd-----=^.^-=-----

let sumAObj = document.getElementById("sumA");
let sumBObj = document.getElementById("sumB");
let sumObj = document.getElementById("sum");

function doAdd() {
  let a = parseFloat(sumAObj.value); // Convert string to integer
  let b = parseFloat(sumBObj.value);
  let sum = a + b;

  if (sum) {
    sumObj.value = sum;
  }
}

sumAObj.addEventListener("input", doAdd);
sumBObj.addEventListener("input", doAdd);

//-=^.^-=---doSub-----=^.^-=-----

let subAObj = document.getElementById("subA");
let subBObj = document.getElementById("subB");
let subObj = document.getElementById("sub");

function doSub() { 
  let a = parseFloat(subAObj.value);
  let b = parseFloat(subBObj.value);
  let sub = a - b;

  if (sub) {
    subObj.value = sub;
  }
}

subAObj.addEventListener("input", doSub);
subBObj.addEventListener("input", doSub);


//-=^.^-=---doMult-----=^.^-=-----

let multAObj = document.getElementById("multA");
let multBObj = document.getElementById("multB");
let multObj = document.getElementById("mult");

function doMult() { 
  let a = parseFloat(multAObj.value);
  let b = parseFloat(multBObj.value);
  let mult = a * b;

  if (mult) {
    multObj.value = mult;
  }
}

multAObj.addEventListener("input", doMult);
multBObj.addEventListener("input", doMult);


//-=^.^-=---doDivide-----=^.^-=-----

let divideAObj = document.getElementById("divideA");
let divideBObj = document.getElementById("divideB");
let divideObj = document.getElementById("divide");

function doDivide() { 
  let a = parseFloat(divideAObj.value);
  let b = parseFloat(divideBObj.value);
  let divide = a / b;

  if (divide) {
    divideObj.value = divide;
  }
}

divideAObj.addEventListener("input", doDivide);
divideBObj.addEventListener("input", doDivide);



//-=^.^-=---doModule-----=^.^-=-----

let moduleAObj = document.getElementById("moduleA");
let moduleBObj = document.getElementById("moduleB");
let moduleObj = document.getElementById("module");

function doModule() { 
  let a = parseFloat(moduleAObj.value);
  let b = parseFloat(moduleBObj.value);
  let module = a % b;

  if (!isNaN(module)) {
    moduleObj.value = module;
  }
}

moduleAObj.addEventListener("input", doModule);
moduleBObj.addEventListener("input", doModule);



//-=^.^-=---to clear the input text when refresh the page-----=^.^-=----

function init() {
  document.querySelectorAll("input").forEach((elem) => elem.value  = "");
}
window.onload = init;
 
