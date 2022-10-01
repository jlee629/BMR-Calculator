var age = document.querySelector(".bmr-calculator form #age");
var height = document.querySelector(".bmr-calculator form #height");
var weight = document.querySelector(".bmr-calculator form #weight");
var bmr = document.querySelector(".bmr-calculator .result .bmr");
var calculateBtn = document.querySelector(".bmr-calculator .result .calculate-btn");
var errorMessage = document.querySelector(".bmr-calculator .result .error-message");

function calculateBMR(gender, age, weight, height) {
    if(gender == "male") {
        return 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;    
    }
    return 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;    
};

calculateBtn.addEventListener("click", function() {

    if (age.classList.contains("invalid") || height.classList.contains("invalid") || weight.classList.contains("invalid")) {
        errorMessage.classList.add("active");
        return;
    }

    errorMessage.classList.remove("active");


    var genderValue = document.querySelector(".bmr-calculator form input[name='gender']:checked").value;
    var activityValue = document.querySelector(".bmr-calculator form input[name='activity-level']:checked").value;

    var BMR = calculateBMR(genderValue, age.value, weight.value, height.value);     
    bmr.innerHTML = "BMR: " + Math.round(BMR).toLocaleString("en-US") + " kcal/day " + " <br /> Total Daily Energy Expenditure: " + Math.round(BMR*activityValue).toLocaleString("en-US") + " kcal/day";
    

    
});

age.addEventListener("input", function(e) {
    var ageValue = e.target.value;
    if (!ageValue || isNaN(ageValue) || ageValue < 0 || ageValue > 150) {
        age.classList.add("invalid");
    } 
    else {
        age.classList.remove("invalid");
    }
})

height.addEventListener("input", function(e) {
    var heightValue = e.target.value;
    if (!heightValue || isNaN(heightValue) || heightValue < 0) {
        height.classList.add("invalid");
    } 
    else {
        height.classList.remove("invalid");
    }
})

weight.addEventListener("input", function(e) {
    var weightValue = e.target.value;
    if (!weightValue || isNaN(weightValue) || weightValue < 0) {
        weight.classList.add("invalid");
    } 
    else {
        weight.classList.remove("invalid");
    }
})