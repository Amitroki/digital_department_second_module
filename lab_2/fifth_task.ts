/*
Создайте тип с применением перечисления из 3го задания (для
использования его в качестве типа поля, для некоторых случаев
возможно его использование при реализации массива). Добавьте
собственные поля стандартных типов, корректно характеризующие ту
или иную предметную область, совпадающую с вашим типом
перечисления. Создайте объект на основе вашего типа и выведите его в
консоль в формате JSON.
*/
import { AminoAcid } from "./third_task";
  
type AminoAcidInfo = {
    type: AminoAcid;
    molecularWeight: number;
    isEssential: boolean;
    codons: string[];
};

const aminoAcidObj: AminoAcidInfo = {
    type: AminoAcid.Leucine,
    molecularWeight: 131.17,
    isEssential: true,
    codons: ["UUA", "UUG", "CUU", "CUC", "CUA", "CUG"]
};
console.log(JSON.stringify(aminoAcidObj, null, 2));
  