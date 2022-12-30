function betterThanAverage(classPoints, yourPoints) {
    const average = classPoints.reduce((a, b) => a + b, 0) / classPoints.length 
    if(average < yourPoints){
    return true
    } else {
    return false
    }
    }





/*
||
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
*/