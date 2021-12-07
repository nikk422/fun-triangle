var input1=document.querySelector("#angle1");
var input2=document.querySelector("#angle2");
var input3=document.querySelector("#angle3");
var checkBtn=document.querySelector("#Tringle-btn");
var outputDiv=document.querySelector("#output");

function calculateSumAngles(angl1,angl2,angl3){
    var sumOfAngles= angl1+angl2+angl3;

    return sumOfAngles
}

function isTringle(){
    var sumOfAngles=calculateSumAngles(Number(input1.value),Number(input2.value),Number(input3.value));
    if (sumOfAngles===180){
        // console.log("yes is yrimbk");
        outputDiv.innerText="yes! the angles form a Tringle";
    }else{
        outputDiv.innerText="the angles form is not Tringle";
    }
};

checkBtn.addEventListener("click", isTringle);


