/* 
Выполните заключение интерфейсов и классов, реализованных в работе 3 
в пространство имён с названием Transport. 
Добавьте ключевое слово, которое сделает namespace модулем. 
При необходимости добавьте это ключевое слово 
к другим элементам пространства имён.
*/
/* 
Создайте декоратор, выполняющий блокировку изменения прототипа
класса автомобиль. Необходимо проверить, осталась ли возможность
добавления сторонних полей в объект после введения декоратора
(проверка работоспособности).
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
        Coupe = 'Купе',
        Sedan = 'Седан',
        Hatchback = 'Хэтчбек',
    }

     export enum CarType {
        Econom = 'Эконом',
        Comfort = 'Комфорт',
        Lux = 'Люкс',
        Sport = 'Спорт'
    }

    export interface Car extends Vehicle {
        bodyType: BodyType;
        carType: CarType;
    }

    function sealClass<T extends { new(...args: any[]): {} }>(constructor: T) {
        Object.seal(constructor.prototype);
        return constructor;
    }

    function uppercaseMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args: any[]) {
            const result = originalMethod.apply(this, args);
            if (typeof result === "string") {
                return result.toUpperCase();
            }
            return result;
        };
        return descriptor;
    }

    @sealClass
    export class CarImpl extends VehicleImpl implements Car {
        private _bodyType: BodyType;
        private _carType: CarType;

        constructor(
            brand: string,
            model: string,
            year: number,
            vin: string,
            registrationNumber: string,
            owner: Owner,
            bodyType: BodyType,
            carType: CarType
        ) {
            super(brand, model, year, vin, registrationNumber, owner);
            this._bodyType = bodyType;
            this._carType = carType;
        }

        get bodyType(): BodyType {
            return this._bodyType;
        }

        set bodyType(value: BodyType) {
            this._bodyType = value;
        }

        get carType(): CarType {
            return this._carType;
        }

        set carType(value: CarType) {
            this._carType = value;
        }

        @uppercaseMethod
        displayAutoInfo(): string {
            let vehicleInf0 = super.displayVehicleInfo();
            return vehicleInf0 + `Кузов: ${this._bodyType}, Класс: ${this._carType}`;
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
