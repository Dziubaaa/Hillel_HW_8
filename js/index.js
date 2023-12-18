const userInput = prompt("Введіть числа, через кому:");

if(userInput === null || userInput.trim() === ""){
    alert("Ви нічого не ввели. Бувайте!");
} else {
    const numberLoop = userInput.split(",").map(value => value.trim() === "" ? NaN : Number(value));// Пояснення на 18 рядку.
    if(numberLoop.some(isNaN)){
        alert("Одне чи декілька введених даних є не коректними, або не є числом. Не забувайте про кому!");
    } else {
        const numberLoopSum = numberLoop.reduce((sum, current) => sum + current, 0);
        const loopLenght = numberLoop.length;
        alert(`Сума введених Вами чисел: ${numberLoopSum}, ви ввели ${loopLenght} символів.`);
        
    }
}


//.map(value => value.trim() === "" ? NaN : Number(value)); - До кожного елементу масиву застосовується функція, яка перевіряє, чи рядок є прожній value.trim() === "".
//Якщо рядок порожній, то елемент замінюється на NaN.