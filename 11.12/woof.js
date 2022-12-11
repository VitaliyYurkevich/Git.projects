function bake(degrees) {
    let message;
    if(degrees > 500) {
        message = "Im not a nuclear reactor!"
    } else if(degrees < 100) {
        message = "Im not a refrigerator!"
    } else {
        message = "Thats a very comfortable temperature for me."
        
    }
    return message
}
let status = bake(350);
