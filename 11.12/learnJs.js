let randomLoc = Math.floor(Math.random() * 5)
let location1 = randomLoc
let location2 = location1 + 1
let location3 = location2 + 1
let guess 
let hits = 0
let guesses = 0
let isSunk = false
while(isSunk == false) {
    guess = prompt("Ввести координаты! (enter a number 0-6):")
    if(guess <0 || guess > 6) {
    alert("Плз введи число от 0 до 6")
} else {
    guesses = guesses + 1
    if(guess == location1 || guess == location2 || guess == location3) {
    hits = hits + 1
    alert("Попадание!")
    } else {
        alert("Промах!")
    }
    if (hits == 3) {
    isSunk = true;
    alert("Потопил корабль, моЛОХ")
                }  
            }
        }      
let finish = "Ты справился, тебе понадобилось " + guesses + " попытки, чтобы потопить мои корабли"
alert(finish)
