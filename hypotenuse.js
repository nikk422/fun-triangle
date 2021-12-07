var BaseValue=document.querySelector("#base");
var heightValue=document.querySelector("#height");
var Checkbtn=document.querySelector("#check-btn");
var output=document.querySelector("#output");


function calculateSumOfSquares(a,b){
    var SumOfSquares=a*a+b*b;
    return SumOfSquares;
}


function calculatehypotenuse(){
    var SumOfSquares=calculateSumOfSquares(Number(BaseValue.value),Number(heightValue.value));

    var lengthOfHypotenuse=Math.sqrt(SumOfSquares);
    output.innerText="the length of hypotenuse is" + lengthOfHypotenuse
}

Checkbtn.addEventListener("click",calculatehypotenuse)