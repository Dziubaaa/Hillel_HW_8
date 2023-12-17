const userInput = prompt("Введіть числа, через кому:");

if(userInput === null || userInput.trim() === ""){
    alert("Ви нічого не ввели. Бувайте!");
} else {
    let numberLoop = userInput.split(",").map(Number);
    if(numberLoop.some(isNaN)){
        alert("Одне чи декілька введених даних є не коректними, або не є числом. Не забувайте про кому!");
    } else {
        let numberLoopSum = numberLoop.reduce((sum, current) => sum + current, 0);
        let loopLenght = numberLoop.length;
        alert(`Сума введених Вами чисел: ${numberLoopSum}, ви ввели ${loopLenght} символів.`);
        
    }
}