function bmi(weight, height) {
    let result = weight/height**2
if(result<=18.5){
    return "Underweight"
} else if(result<= 25.0){
    return "Normal"
} else if(result<= 30.0){
    return "Overweight"
} else if(result> 30 ){
    return "Obese"
}
    } 




/*
||
const bmi = (w, h, bmi = w/h/h) =>  bmi <= 18.5 ? "Underweight" :
                                    bmi <= 25 ? "Normal" :
                                    bmi <= 30 ? "Overweight" : "Obese";
*/