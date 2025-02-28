/* 
Выполните заключение интерфейсов и классов, реализованных в работе 3 
в пространство имён с названием Transport. 
Добавьте ключевое слово, которое сделает namespace модулем. 
При необходимости добавьте это ключевое слово 
к другим элементам пространства имён.
*/
export namespace Transport {
    export enum OwnerDocumentType {
        Passport = "Паспорт",
        DriverLicense = "Водительское удостоверение",
        IDCard = "Идентификационная карта"
    }

    export interface Owner {
        surname: string;
        name: string;
        patronymic: string;
        birthDate: Date;
        documentType: OwnerDocumentType;
        documentSeries: string;
        documentNumber: string;
        displayOwnerInfo(): void;
    }

    export interface Vehicle {
        brand: string;
        model: string;
        year: number;
        vin: string;
        registrationNumber: string;
        owner: Owner;
        displayVehicleInfo(): void;
    }

    export class OwnerImpl implements Owner {
        constructor(
            public surname: string,
            public name: string,
            public patronymic: string,
            public birthDate: Date,
            public documentType: OwnerDocumentType,
            public documentSeries: string,
            public documentNumber: string
        ) {}

        displayOwnerInfo(): void {
            console.log(`Владелец: ${this.surname} ${this.name} ${this.patronymic}`);
            console.log(`Дата рождения: ${this.birthDate.toLocaleDateString()}`);
            console.log(`Тип документа: ${this.documentType}`);
            console.log(`Серия документа: ${this.documentSeries}`);
            console.log(`Номер документа: ${this.documentNumber}`);
        }
    }

    export class VehicleImpl implements Vehicle {
        constructor(
            public brand: string,
            public model: string,
            public year: number,
            public vin: string,
            public registrationNumber: string,
            public owner: Owner
        ) {}

        displayVehicleInfo(): void {
            console.log(`Марка: ${this.brand}`);
            console.log(`Модель: ${this.model}`);
            console.log(`Год выпуска: ${this.year}`);
            console.log(`VIN: ${this.vin}`);
            console.log(`Регистрационный номер: ${this.registrationNumber}`);
        }
    }

    export enum BodyType {
        Sedan = "Седан",
        Coupe = "Купе",
        Hatchback = "Хэтчбек",
        SUV = "Кроссовер",
        Pickup = "Пикап"
    }

    export enum CarClass {
        Economy = "Эконом",
        Premium = "Премиум",
        Luxury = "Люкс"
    }

    export interface Car extends Vehicle {
        bodyType: BodyType;
        carClass: CarClass;
    }

    export class CarImpl extends VehicleImpl implements Car {
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            public bodyType: BodyType,
            public carClass: CarClass
        ) {
            super(brand, model, year, vin, registrationNumber, owner);
        }

        displayVehicleInfo(): void {
            super.displayVehicleInfo();
            console.log(`Тип кузова: ${this.bodyType}`);
            console.log(`Класс автомобиля: ${this.carClass}`);
        }
    }

    export enum FrameType {
        Steel = "Стальная",
        Aluminum = "Алюминиевая",
        Carbon = "Углеродное волокно"
    }

    export interface Motorbike extends Vehicle {
        frameType: FrameType;
        isForSport: boolean;
    }

    export class MotorbikeImpl extends VehicleImpl implements Motorbike {
        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            public frameType: FrameType,
            public isForSport: boolean
        ) {
            super(brand, model, year, vin, registrationNumber, owner);
        }

        displayVehicleInfo(): void {
            super.displayVehicleInfo();
            console.log(`Тип рамы: ${this.frameType}`);
            console.log(`Для спорта: ${this.isForSport ? "Да" : "Нет"}`);
        }
    }

    export interface VehicleStorage<T extends Vehicle> {
        creationDate: Date;
        vehicles: T[];
        getAllVehicles(): T[];
    }

    export class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
        creationDate: Date = new Date();
        vehicles: T[] = [];

        getAllVehicles(): T[] {
            return this.vehicles;
        }

        addVehicle(vehicle: T): void {
            this.vehicles.push(vehicle);
        }
    }
}
