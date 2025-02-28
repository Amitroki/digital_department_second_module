/*
Реализация класса, реализация интерфейса
*/
enum OwnerDocumentType {
    Passport = "Паспорт",
    DriverLicense = "Водительское удостоверение",
    IDCard = "Идентификационная карта"
}

// Интерфейс владелец
interface Owner {
    surname: string;
    name: string;
    patronymic: string;
    birthDate: Date;
    documentType: OwnerDocumentType;
    documentSeries: string;
    documentNumber: string;
    displayOwnerInfo(): void;
}

// Интерфейс транспортное средство
interface Vehicle {
    brand: string;
    model: string;
    year: number;
    vin: string;
    registrationNumber: string;
    owner: Owner;
    displayVehicleInfo(): void;
}

// Владелец
class OwnerImpl implements Owner {
    private _surname: string;
    private _name: string;
    private _patronymic: string;
    private _birthDate: Date;
    private _documentType: OwnerDocumentType;
    private _documentSeries: string;
    private _documentNumber: string;

    constructor(surname: string, name: string, patronymic: string, birthDate: Date, documentType: OwnerDocumentType, documentSeries: string, documentNumber: string) {
        this._surname = surname;
        this._name = name;
        this._patronymic = patronymic;
        this._birthDate = birthDate;
        this._documentType = documentType;
        this._documentSeries = documentSeries;
        this._documentNumber = documentNumber;
    }

    get surname(): string {
        return this._surname;
    }
    set surname(value: string) {
        this._surname = value;
    }

    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }

    get patronymic(): string {
        return this._patronymic;
    }
    set patronymic(value: string) {
        this._patronymic = value;
    }

    get birthDate(): Date {
        return this._birthDate;
    }
    set birthDate(value: Date) {
        this._birthDate = value;
    }

    get documentType(): OwnerDocumentType {
        return this._documentType;
    }
    set documentType(value: OwnerDocumentType) {
        this._documentType = value;
    }

    get documentSeries(): string {
        return this._documentSeries;
    }
    set documentSeries(value: string) {
        this._documentSeries = value;
    }

    get documentNumber(): string {
        return this._documentNumber;
    }
    set documentNumber(value: string) {
        this._documentNumber = value;
    }

    displayOwnerInfo(): void {
        console.log(`Владелец: ${this._surname} ${this._name} ${this._patronymic}`);
        console.log(`Дата рождения: ${this._birthDate.toLocaleDateString()}`);
        console.log(`Тип документа: ${this._documentType}`);
        console.log(`Серия документа: ${this._documentSeries}`);
        console.log(`Номер документа: ${this._documentNumber}`);
    }
}

// Транспортное средство
class VehicleImpl implements Vehicle {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;

    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
    }

    get brand(): string {
        return this._brand;
    }
    set brand(value: string) {
        this._brand = value;
    }

    get model(): string {
        return this._model;
    }
    set model(value: string) {
        this._model = value;
    }

    get year(): number {
        return this._year;
    }
    set year(value: number) {
        this._year = value;
    }

    get vin(): string {
        return this._vin;
    }
    set vin(value: string) {
        this._vin = value;
    }

    get registrationNumber(): string {
        return this._registrationNumber;
    }
    set registrationNumber(value: string) {
        this._registrationNumber = value;
    }

    get owner(): Owner {
        return this._owner;
    }
    set owner(value: Owner) {
        this._owner = value;
    }

    displayVehicleInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
    }
}

// Пример
const owner = new OwnerImpl('Иванов', 'Иван', 'Иванович', new Date(1985, 5, 15), OwnerDocumentType.Passport, '1234', '567890');
const vehicle = new VehicleImpl('Toyota', 'Corolla', 2020, '1HGBH41JXMN109186', 'A123BC', owner);
owner.displayOwnerInfo();

vehicle.displayVehicleInfo();

// Кузов
enum BodyType {
    Sedan = "Седан",
    Coupe = "Купе",
    Hatchback = "Хэтчбек",
    SUV = "Кроссовер",
    Pickup = "Пикап"
}

// Класс
enum CarClass {
    Economy = "Эконом",
    Premium = "Премиум",
    Luxury = "Люкс"
}

// Интерфейс Автомобиль
interface Car extends Vehicle {
    bodyType: BodyType;
    carClass: CarClass;
    displayVehicleInfo(): void;
}

// Рама
enum FrameType {
    Steel = "Стальная",
    Aluminum = "Алюминиевая",
    Carbon = "Углеродное волокно"
}

// Интерфейс Мотоцикл
interface Motorbike extends Vehicle {
    frameType: FrameType;
    isForSport: boolean;
    displayVehicleInfo(): void;
}

// Автомобиль
class CarImpl implements Car {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _bodyType: BodyType;
    private _carClass: CarClass;

    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, bodyType: BodyType, carClass: CarClass) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._bodyType = bodyType;
        this._carClass = carClass;
    }

    // Геттеры и Сеттеры для свойств
    get brand(): string {
        return this._brand;
    }
    set brand(value: string) {
        this._brand = value;
    }

    get model(): string {
        return this._model;
    }
    set model(value: string) {
        this._model = value;
    }

    get year(): number {
        return this._year;
    }
    set year(value: number) {
        this._year = value;
    }

    get vin(): string {
        return this._vin;
    }
    set vin(value: string) {
        this._vin = value;
    }

    get registrationNumber(): string {
        return this._registrationNumber;
    }
    set registrationNumber(value: string) {
        this._registrationNumber = value;
    }

    get owner(): Owner {
        return this._owner;
    }
    set owner(value: Owner) {
        this._owner = value;
    }

    get bodyType(): BodyType {
        return this._bodyType;
    }
    set bodyType(value: BodyType) {
        this._bodyType = value;
    }

    get carClass(): CarClass {
        return this._carClass;
    }
    set carClass(value: CarClass) {
        this._carClass = value;
    }

    displayVehicleInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип кузова: ${this._bodyType}`);
        console.log(`Класс автомобиля: ${this._carClass}`);
    }
}

// Мотоцикл
class MotorbikeImpl implements Motorbike {
    private _brand: string;
    private _model: string;
    private _year: number;
    private _vin: string;
    private _registrationNumber: string;
    private _owner: Owner;
    private _frameType: FrameType;
    private _isForSport: boolean;

    constructor(brand: string, model: string, year: number, vin: string, registrationNumber: string, owner: Owner, frameType: FrameType, isForSport: boolean) {
        this._brand = brand;
        this._model = model;
        this._year = year;
        this._vin = vin;
        this._registrationNumber = registrationNumber;
        this._owner = owner;
        this._frameType = frameType;
        this._isForSport = isForSport;
    }

    get brand(): string {
        return this._brand;
    }
    set brand(value: string) {
        this._brand = value;
    }

    get model(): string {
        return this._model;
    }
    set model(value: string) {
        this._model = value;
    }

    get year(): number {
        return this._year;
    }
    set year(value: number) {
        this._year = value;
    }

    get vin(): string {
        return this._vin;
    }
    set vin(value: string) {
        this._vin = value;
    }

    get registrationNumber(): string {
        return this._registrationNumber;
    }
    set registrationNumber(value: string) {
        this._registrationNumber = value;
    }

    get owner(): Owner {
        return this._owner;
    }
    set owner(value: Owner) {
        this._owner = value;
    }

    get frameType(): FrameType {
        return this._frameType;
    }
    set frameType(value: FrameType) {
        this._frameType = value;
    }

    get isForSport(): boolean {
        return this._isForSport;
    }
    set isForSport(value: boolean) {
        this._isForSport = value;
    }

    displayVehicleInfo(): void {
        console.log(`Марка: ${this._brand}`);
        console.log(`Модель: ${this._model}`);
        console.log(`Год выпуска: ${this._year}`);
        console.log(`VIN: ${this._vin}`);
        console.log(`Регистрационный номер: ${this._registrationNumber}`);
        console.log(`Тип рамы: ${this._frameType}`);
        console.log(`Для спорта: ${this._isForSport ? "Да" : "Нет"}`);
    }
}

// Пример
const first_owner = new OwnerImpl('Иванов', 'Иван', 'Иванович', new Date(1985, 5, 15), OwnerDocumentType.Passport, '1234', '567890');
const car = new CarImpl('BMW', 'X5', 2022, '5UXTY5C57L0G09999', 'A123BC', first_owner, BodyType.SUV, CarClass.Luxury);
const motorbike = new MotorbikeImpl('Yamaha', 'YZF-R1', 2020, 'JYARJ16Y4GA000999', 'B456DE', first_owner, FrameType.Aluminum, true);
owner.displayOwnerInfo();

car.displayVehicleInfo();
motorbike.displayVehicleInfo();

// Интерфейс Хранилище
interface VehicleStorage<T extends Vehicle> {
    creationDate: Date;
    vehicles: T[];
    getAllVehicles(): T[];
}

// Хранилище
class VehicleStorageImpl<T extends Vehicle> implements VehicleStorage<T> {
    private _creationDate: Date;
    private _vehicles: T[];

    constructor() {
        this._creationDate = new Date();
        this._vehicles = [];
    }

    get creationDate(): Date {
        return this._creationDate;
    }
    set creationDate(value: Date) {
        this._creationDate = value;
    }

    get vehicles(): T[] {
        return this._vehicles;
    }
    set vehicles(value: T[]) {
        this._vehicles = value;
    }

    getAllVehicles(): T[] {
        return this._vehicles;
    }

    addVehicle(vehicle: T): void {
        this._vehicles.push(vehicle);
    }
}

// Пример 

const carStorage = new VehicleStorageImpl<CarImpl>();
const third_owner = new OwnerImpl('Борисов', 'Борис', 'Борисович', new Date(1999, 9, 9), OwnerDocumentType.Passport, '1234', '567890');

carStorage.addVehicle(new CarImpl(
    "BMW", "X5", 2022, "5UXTY5C57L0G09999", "A123BC",
    third_owner, BodyType.SUV,  CarClass.Premium
));

carStorage.addVehicle(new CarImpl(
    "Audi", "A6", 2021, "WAUZ2A5F3HN006789", "B456CD",
    third_owner, BodyType.SUV, CarClass.Premium
));

const allCars = carStorage.getAllVehicles();
console.log("Сведения о всех автомобилях:");
allCars.forEach(car => car.displayVehicleInfo());

// Пример

const motorbikeStorage = new VehicleStorageImpl<MotorbikeImpl>();
const second_owner = new OwnerImpl('Иванов', 'Иван', 'Иванович', new Date(1985, 5, 15), OwnerDocumentType.Passport, '1234', '567890');

motorbikeStorage.addVehicle(new MotorbikeImpl(
    "Yamaha", "YZF-R1", 2020, "JYARJ16Y4GA000999", "B456DE", 
    second_owner, FrameType.Aluminum, true
));

motorbikeStorage.addVehicle(new MotorbikeImpl(
    "Kawasaki", "Ninja ZX-10R", 2021, "JKBZXZX10RGA123456", "C789FG",
    second_owner, FrameType.Steel, false
));

const allMotorbikes = motorbikeStorage.getAllVehicles();
console.log("Сведения о всех мотоциклах:");
allMotorbikes.forEach(motorbike => motorbike.displayVehicleInfo());