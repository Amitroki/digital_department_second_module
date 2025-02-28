/*
Вариант 5: реализуйте метод внутри класса Автомобиль,
возвращающий сведения только о Типе кузова и Классе
автомобиля. Верните данные в формате JSON.
*/
import { Transport } from "./module";

const last_owner = new Transport.OwnerImpl("Иванов", "Иван", "Иванович", new Date(1985, 5, 15), Transport.OwnerDocumentType.Passport, "1234", "567890");
const last_car = new Transport.CarImpl("BMW", "X5", 2022, "5UXTY5C57L0G09999", "A123BC", last_owner, Transport.BodyType.Coupe, Transport.CarType.Lux);

console.log(last_car.getCarInfo());