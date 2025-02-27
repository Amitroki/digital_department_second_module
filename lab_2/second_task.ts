/*
Вариант 5: создайте кортеж, который может содержать только 2
строковых и 1 числовое значения (порядок следования: число,
строка0, строка1). Реализуйте метод, возвращающий конкатенацию
строк в формате: строка1: строка0
*/

const customTuple: [number, string, string] = [20, "надо больше", "Спать"]

const concatenate = (tup: [number, string, string] ) => {
  return `${tup[2]}: ${tup[1]}`;
}

const result = concatenate(customTuple);

console.log(result); // "Спать: надо больше"