/* 
Создайте объекты с использованием данного пространства имён.
*/
import {Transport} from "./module"

const owner = new Transport.OwnerImpl("Иванов", "Иван", "Иванович", new Date(1985, 5, 15), Transport.OwnerDocumentType.Passport, "1234", "567890");
const car = new Transport.CarImpl("BMW", "X5", 2022, "5UXTY5C57L0G09999", "A123BC", owner, Transport.BodyType.Coupe, Transport.CarType.Lux);
const motorbike = new Transport.MotorbikeImpl("Yamaha", "YZF-R1", 2020, "JYARJ16Y4GA000999", "B456DE", owner, Transport.FrameType.Aluminum, true);

owner.displayOwnerInfo();
car.displayVehicleInfo();
motorbike.displayVehicleInfo();

const motorbikeStorage = new Transport.VehicleStorageImpl<MotorbikeImpl>();
const second_owner = new Transport.OwnerImpl('Иванов', 'Иван', 'Иванович', new Date(1985, 5, 15), Transport.OwnerDocumentType.Passport, '1234', '567890');

import MotorbikeImpl = Transport.MotorbikeImpl
const second_motorbike = new Transport.MotorbikeImpl(
    "Yamaha", "YZF-R1", 2020, "JYARJ16Y4GA000999", "B456DE", 
    second_owner, Transport.FrameType.Aluminum, true
)
motorbikeStorage.addVehicle(second_motorbike);


const allMotorbikes = motorbikeStorage.getAllVehicles();
console.log("Сведения о всех мотоциклах:");
allMotorbikes.forEach(motorbike => motorbike.displayVehicleInfo());