/* 
Реализуйте метод, который будет выводить информацию в
консоль о создаваемом объекте типа Cat или Dog, применяя
Обобщенный тип, ограниченный типом Pet.
*/
class Pet {
    name: string = 'Some pet'
    age: number = -1
    speak() {
        return "No speak. I am fish!";
    }
}

class Dog extends Pet {
    label = "AngryHunter";
    age = 8;
    speak() {
        return "Yaw-Gaw!";
    }
}

class Cat extends Pet {
    name = 'Barsik';
    age = 2;
    speak() {
        return "Miyau!";
    }
}

function printPetInfo<T extends Pet>(pet: T): void {
    console.log(`Имя: ${pet.name}`);
    console.log(`Возраст: ${pet.age}`);
    console.log(`Средство общения: ${pet.speak()}`);
}

const myCat = new Cat();
console.log("Информация:");
printPetInfo(myCat);