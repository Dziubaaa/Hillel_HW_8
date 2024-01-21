function firstTask() {
    const stringFirst = prompt("Введіть перший рядок: ");
    const stringSecond = prompt("Введіть другий рядок: ");
    const stringThird = prompt("Введіть третій рядок: ");

    const dataFromPromt = (stringFirst + ' ' + stringSecond + ' ' + stringThird + ' ').split(' ');
    const mixedString = dataFromPromt.sort(() => Math.random() - 0.5);
    const mixStrings = mixedString.join(' ');

    alert(`Ваші рядки: ${mixStrings}`); 
}

function secondTask() {
    const enterNumber = prompt("Введіть 5ти значне число: ")

    if (/^\d{5}$/.test(enterNumber)){
        const output = enterNumber.split('').join(' ')
        alert(output);
    } else {
       alert("Введіть коректні дані.")
    }
}
