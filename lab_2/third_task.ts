/*
Вариант 5: создайте тип перечисление для типов стандартных
аминокислот (Глицин, Глутамин и т.д). Выведите какой-либо тип
аминокислоты в консоль.
*/
export enum AminoAcid {
    Glycine = "Глицин",
    Glutamine = "Глутамин",
    Alanine = "Аланин",
    Valine = "Валин",
    Leucine = "Лейцин",
    Isoleucine = "Изолейцин",
    Serine = "Серин",
    Threonine = "Треонин",
    Cysteine = "Цистеин",
    Methionine = "Метионин"
}
  
console.log("Вторая аминоксилота:", AminoAcid.Glycine);
  