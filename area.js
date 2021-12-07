var firstSideOfTriangle=document.querySelector("#first-side");
var secondSideOfTriangle=document.querySelector("#second-side");
var Checkbtn=document.querySelector("#calculate");
var outputDiv=document.querySelector("#output");


function calculateMultiply(firstSide,secondSide){
    var multiply=firstSide*secondSide;
    return multiply;
}


function calculatearea(){
    var multiply=calculateMultiply(Number(firstSideOfTriangle.value),Number(secondSideOfTriangle.value));

    var area=multiply/2;
    outputDiv.innerText="the area of  two sides of triangle  is  " + area  +  "cm²"
}

Checkbtn.addEventListener("click",calculatearea)