/*
Одномерный массив
Вариант 5: реализовать метод, возвращающий максимальное
значение среди отрицательных чисел массива целых чисел.
*/
function getMaxNegativeNumber(arr: number[]): number | null {
    const negativeNumbers = arr.filter(num => num < 0);
    if (negativeNumbers.length === 0) {
      return null;
    }
    return Math.max(...negativeNumbers);
  }
  
const numbers: number[] = [4, -1, 7, -3, -10, 5, 2];
const maxNegative = getMaxNegativeNumber(numbers);
console.log("Максимальное среди отрицательных чисел:", maxNegative);
/*
Двумерный массив
Вариант 5: реализовать метод, возвращающий матрицу целых
чисел, составленный из матрицы булевых значений (значение true
переходит в формат числа 1, а false в формат числа 0).
*/

function convertBooleanMatrixToInt(matrix: boolean[][]): number[][] {
    return matrix.map(row => row.map(value => value ? 1 : 0));
}
  
const booleanMatrix: boolean[][] = [
    [true, false, true],
    [false, false, true],
    [true, true, false]
];
console.log(booleanMatrix);
const intMatrix = convertBooleanMatrixToInt(booleanMatrix);
console.log(intMatrix);
  