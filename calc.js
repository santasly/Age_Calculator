
let day= document.getElementById("day_input");
let month= document.getElementById("month_input");
let year = document.getElementById("year_input");


let output1= document.getElementById("day-output");
let output2= document.getElementById("month-output");
let output3= document.getElementById("year-output");

let bounce1= document.getElementById('error1');
let bounce2= document.getElementById('error2');
let bounce3= document.getElementById('error3');
 let form = document.querySelector('form')
let submit_btn = document.getElementById("btn");

day.addEventListener("input", function(){
    
    if (day.value > 31  || day.value <= 0 ){
        bounce1.textContent="not valid ";
        isValid = false;
        return;
    }else{
        isValid = true;
        bounce1.textContent="";
    }
     
})
month.addEventListener("input", function(){
    
    if (month.value > 12 || month.value <= 0){
        bounce2.textContent=" not valid";
        isValid = false;
        return;
    }else{
        isValid = true;
        bounce2.textContent ="";
    }
     
})
year.addEventListener("input", function(){
    if (year.value > 2023 || year.value <= 0){
        bounce3.textContent="not valid";
        isValid = false;
        return;
    }else{
        isValid = true;
        bounce3.textContent ="";
    }
     
})
// output1.addEventListener()

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const BirthDate= new Date(`${year.value}/${month.value}/${day.value}`);
     
    const today = new Date();
     
console.log(BirthDate);

   
    //  let DOB = today.getDay;
    // let MOB =today.getMonth();
    // let YOB = today.getFullYear();

    const ageInMilliseconds = today - BirthDate;
    
    const ageInDays = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));
    const ageInMonths = Math.floor(ageInDays / 30);
    const ageInYears = Math.floor(ageInMonths / 12);

    output3.textContent = ageInYears + "  years";
    output2.textContent = ageInMonths % 12 + "  months";
    output1.textContent = ageInDays % 30 + "  days";
   

        
})
 