function simpleMultiplication(number) {
    if(number % 2 == 0){
      return number * 8;
  }else{return number * 9}
}





//||
function simpleMultiplication(n) {
    return n * (n % 2 ? 9 : 8);
}