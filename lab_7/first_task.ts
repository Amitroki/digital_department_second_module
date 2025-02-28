/*
Вариант 5: реализуйте внутри класса Хранилище метод (не
забудьте добавить его определение в интерфейс), позволяющий
выполнить сортировку по Модели от Я до А Транспортного
средства. Метод не должен возвращать отсортированный массив
Транспортных средств, а должен сохранить результат сортировки в
массив данного хранилища. Для проверки следует вызвать метод,
возвращающий все элементы хранилища. 
*/
import { Transport } from "./module";
const carOwner = new Transport.OwnerImpl(
    "Иванов", "Иван", "Иванович", new Date(1985, 5, 15), Transport.OwnerDocumentType.Passport,
    "1234", "567890"
);

const carStorage = new Transport.VehicleStorageImpl<Transport.Car>();

carStorage.addVehicle(new Transport.CarImpl("Toyota", "Camry", 2020, "1234567890", "A123BC", carOwner, Transport.BodyType.Sedan, Transport.CarType.Comfort));
carStorage.addVehicle(new Transport.CarImpl("Honda", "Civic", 2022, "0987654321", "B456DE", carOwner, Transport.BodyType.Hatchback, Transport.CarType.Sport));
carStorage.addVehicle(new Transport.CarImpl("BMW", "X5", 2021, "5678901234", "C789FG", carOwner, Transport.BodyType.Coupe, Transport.CarType.Lux));

console.log("До сортировки:");
console.log(carStorage.getAllVehicles().map(car => car.model));

carStorage.sortByModelDesc();

console.log("После сортировки:");
console.log(carStorage.getAllVehicles().map(car => car.model));