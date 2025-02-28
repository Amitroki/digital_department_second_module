/*
Реализуйте на ваш выбор функцию, которая возвращает функцию,
которая в свою в свою очередь пишет результат в консоль некоторую
строку. Вызвать данные функции, показав принцип работы замыканий.
*/
function createAccumulator(): (num: number) => number {
    let total = 0;
    return function(num: number): number {
        total += num;
        return total;
    };
}

const accumulator = createAccumulator();

console.log(accumulator(5));   // 5
console.log(accumulator(10));  // 15
console.log(accumulator(3));   // 18
console.log(accumulator(7));   // 25