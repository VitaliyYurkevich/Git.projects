function areYouPlayingBanjo(name) {
    let result
    if(name.startsWith('R') || name.startsWith('r')){ //Этот метод позволяет определять, начинается ли строка с указанных в скобках символов.
    result = name + " plays banjo"; 
    } 
else{
    result = name + " does not play banjo"
} return result
    }






/*
||
function areYouPlayingBanjo(name) {
  // Implement me
if (name[0] == 'R' || name[0] == 'r')
    return name + " plays banjo";
    else
    return name + " does not play banjo";
}
*/