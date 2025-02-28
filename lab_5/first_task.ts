/*
Задание 1.
Вариант 5.
*/

const arr: number[] = [12, 23, 34, 45];

async function removeOddNumbers(arr: number[]) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] % 2 !== 0) {
            console.log(`Удаляется: ${arr[i]}`);
            arr.splice(i, 1);
            console.log(`Текущий массив: ${arr}`);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    console.log("Удаление завершено!");
}

removeOddNumbers(arr);
