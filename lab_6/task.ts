/*
Проверка работоспособности
*/
import { Transport } from "./module";

const owner = new Transport.OwnerImpl("Иванов", "Иван", "Иванович", new Date(1985, 5, 15), Transport.OwnerDocumentType.Passport, "1234", "567890");
const car = new Transport.CarImpl("BMW", "X5", 2022, "5UXTY5C57L0G09999", "A123BC", owner, Transport.BodyType.Coupe, Transport.CarType.Lux);

try {
    (Transport.CarImpl.prototype as any).test = 1;
    console.log("Новое поле добавлено")
} catch (error) {
    console.error("Поле прототипа не было изменено - ", error);
}

try {
    Object.defineProperty(Transport.CarImpl.prototype, 'printVehicleInfo', {
      value: function() { console.log("изменен displayVehicleInfo"); },
      writable: false,
      configurable: false
    });
  } catch (error) {
    console.error("Поле прототипа не было изменено - ", error);
}