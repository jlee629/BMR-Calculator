var age = document.querySelector(".bmr-calculator form #age");
var bmr = document.querySelector(".bmr-calculator .result .bmr");
var calculateBtn = document.querySelector(".bmr-calculator .result .calculate-btn");
var feet = document.querySelector(".bmr-calculator form #feet");
var inches = document.querySelector(".bmr-calculator form #inches");
var stones = document.querySelector(".bmr-calculator form #stones");
var pounds = document.querySelector(".bmr-calculator form #pounds");
var errorMessage = document.querySelector(".bmr-calculator .result .error-message");


function calculateBMR(gender, age, feet, inches, stones, pounds) {
    if(gender == "male") {
        return 66.47 + 12.7 * inches + 12.7 * 12 * feet + 6.24 * pounds + 6.24 * 14 * stones - 6.75 * age;    
    }
    
    return 655.1 + 4.7 * inches + 4.7 * 12 * feet + 4.35 * pounds + 4.35 * 14 * stones  - 4.7 * age;
};

calculateBtn.addEventListener("click", function() {

    if (age.classList.contains("invalid") || feet.classList.contains("invalid") || inches.classList.contains("invalid") || stones.classList.contains("invalid") || pounds.classList.contains("invalid")) {
        errorMessage.classList.add("active");
        return;
    }

    errorMessage.classList.remove("active");

    var genderValue = document.querySelector(".bmr-calculator form input[name='gender']:checked").value;
    var activityValue = document.querySelector(".bmr-calculator form input[name='activity-level']:checked").value;

    var BMR = calculateBMR(genderValue, age.value, feet.value, inches.value, stones.value, pounds.value);
    bmr.innerHTML = "BMR: " + Math.round(BMR).toLocaleString("en-US") + " kcal/day" + " <br /> Total Daily Energy Expenditure: " + Math.round(BMR*activityValue).toLocaleString("en-US") + " kcal/day";

});

age.addEventListener("input", function(e) {
    let ageValue = e.target.value;
    if (!ageValue || isNaN(ageValue) || ageValue < 0 || ageValue > 150) {
        age.classList.add("invalid");
    } else {
        age.classList.remove("invalid");
    }
})

feet.addEventListener("input", function(e) {
    var feetValue = e.target.value;
    if (!feetValue || isNaN(feetValue) || feetValue < 0) {
        feet.classList.add("invalid");
    } 
    else {
        feet.classList.remove("invalid");
    }
})

inches.addEventListener("input", function(e) {
    var inchesValue = e.target.value;
    if (!inchesValue || isNaN(inchesValue) || inchesValue < 0) {
        inches.classList.add("invalid");
    } 
    else {
        inches.classList.remove("invalid");
    }
})

stones.addEventListener("input", function(e) {
    var stonesValue = e.target.value;
    if (!stonesValue || isNaN(stonesValue) || stonesValue < 0) {
        stones.classList.add("invalid");
    } 
    else {
        stones.classList.remove("invalid");
    }
})

pounds.addEventListener("input", function(e) {
    var poundsValue = e.target.value;
    if (!poundsValue || isNaN(poundsValue) || poundsValue < 0) {
        pounds.classList.add("invalid");
    } 
    else {
        pounds.classList.remove("invalid");
    }
})
