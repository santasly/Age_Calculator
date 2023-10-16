
let day= document.getElementById("day_input");
let month= document.getElementById("month_input");
let year = document.getElementById("year_input");


let output1= document.getElementById("day-output");
let output2= document.getElementById("month-output");
let output3= document.getElementById("year-output");

let bounce1= document.getElementById('error1');
let bounce2= document.getElementById('error2');
let bounce3= document.getElementById('error3');

let submit_btn = document.getElementById("btn");

day.addEventListener("input", function(){
    
    if (day.value > 31  || day.value <= 0 ){
        bounce1.textContent=" must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        bounce1.textContent="";
    }
     
})
month.addEventListener("input", function(){
    
    if (month.value > 12 || month.value <= 0){
        bounce2.textContent=" must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        bounce2.textContent ="";
    }
     
})
year.addEventListener("input", function(){
    if (year.value > 2023 || year.value <= 0){
        bounce3.textContent=" must be a valid date";
        isValid = false;
        return;
    }else{
        isValid = true;
        bounce3.textContent ="";
    }
     
})
submit_btn.addEventListener("click" function(){
    
})
