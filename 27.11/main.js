const minNumber = 0 // минимальное число прописываем
const maxNumber = 100 // максимально число прописываем
const attemptsCount = 10 // максимально число попыток прописываем
const getRandomNumber = () => { // открываем функцию генератора рандомного числа
    const randomNumber = Math.round(Math.random() * 100) // Math.round округляет дробное число до целого, после этого Math.random умножает число в диапозоне от 0 до 1 на 100
    return randomNumber // возвращаем результат рандомного числа
}

const randomNumber = getRandomNumber() // присваиваем переменной рандомный результат 
console.log(randomNumber); // Выкатываем в консоле рандомное число

const getPlayerName = () => { // выкатываем диалоговое окно с предложением ввода имени юзера
    const playerName = prompt("Привет! Как тебя зовут", "Введи имя, дружище :)") // само диалоговое окно
    return playerName           // возвращаем значение введенное юзером
}
const playerName = getPlayerName() // 
console.log(playerName);

const bigGame = (min, max, attempts, randomNum, player) => {
alert(`Привет, ${player}!
Я загадал число в диапозоне от ${min} до ${max}.
У тебя есть ${attempts} попыток отгадать его.
Погнали
`)
for (let index = 1; index <= attempts; index++) {
    // запрос ввода у игрока
    const answer = prompt('Давай твой вариант', 'Введи число')
    // проверка ввода
    if(answer < randomNum) {
        // или следующая итерация цикла
        alert(`Я загадал большее число.
        У тебя осталось ${attempts - index} попыток.`)

    } else if(answer > randomNum) {
        // или следующая итерация цикла
        alert(`Я загадал меньшее число.
        У тебя осталось ${attempts - index} попыток.`)
    } else{
        // или выход, если угадал
        alert(`${player}, Ты красавчик!
        Ты угадал мое число!`)
        return
    }
    // или следующая итерация цикла
}
    alert(`О, нет...
    Ты не справился, ${player}. Тебе не хватило ${attempts} попыток.
    Убейся об стену, неудачник...
    `)// негативный сценарий, если игрок провалит все 10 попыток
}

bigGame(minNumber, maxNumber, attemptsCount, randomNumber, playerName) 
