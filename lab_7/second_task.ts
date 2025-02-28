/*
Вариант 5: реализуйте метод, возвращающий все Транспортные
средства, Серия и Номер документа владельца которой полностью
совпадает с заданными в параметрах. Метод должен быть
невосприимчивым к регистру в передаваемом параметре для
Серии документа.
*/

import { Transport } from "./module";

const owner = new Transport.OwnerImpl("Иванов", "Иван", "Иванович", new Date(1985, 5, 15), Transport.OwnerDocumentType.Passport, "1234", "567890");
const fifth_owner = new Transport.OwnerImpl('Борисов', 'Борис', 'Борисович', new Date(1999, 9, 9), Transport.OwnerDocumentType.Passport, 'abcd', '123456');

const vehicleStorage = new Transport.VehicleStorageImpl<Transport.Car>();

vehicleStorage.addVehicle(new Transport.CarImpl("Toyota", "Camry", 2020, "1234567890", "A123BC", owner, Transport.BodyType.Sedan, Transport.CarType.Comfort));
vehicleStorage.addVehicle(new Transport.CarImpl("Honda", "Civic", 2022, "0987654321", "B456DE", fifth_owner, Transport.BodyType.Hatchback, Transport.CarType.Sport));

const foundVehicles = vehicleStorage.findByOwnerDocument("AbCd", "123456");

console.log("Найденные транспортные средства:");
foundVehicles.forEach(vehicle => console.log(vehicle.brand, vehicle.model, vehicle.owner.surname));