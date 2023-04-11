// 1. Створити клас Людина.

//     Властивості:
//     імʼя;
//     стать.
//     Методи:
//     конструктор, який приймає два параметри: імʼя та стать.

class Human {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

//   2. Створити клас Квартира.

//   Властивості:
//   конструктор не потрібен;
//   масив жителів, який при створенні пустий.
//   Методи:
//   додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

class Apartament {
    constructor() {
        this.residents = [];
    }
    
    addResident(person) {
        if (person instanceof Human) {
            this.residents.push(person);
            console.log(`${person.name} додано жителів квартири`);
        } else {
            console.log('Error! Метод має приймати екземпляр класу "Human"');
        }
    }
}


// 3. Створити клас Будинок.

//     Властивості:
//     масив квартир, який при створенні пустий;
//     максимальна кількість квартир.
//     Методи:
//     конструктор, який приймає один параметр: максимальну кількість квартир;
//     додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

class House {
    constructor(maxFlats) {
        this.flats = [];
        this.maxFlats = maxFlats;
    }

    addFlat(apartment) {
        if (this.flats.length < this.maxFlats) {
            this.flats.push(apartment);
            console.log('Квартиру додано до будинку!');
        } else {
            console.log('Error! Кількість квартир в будинку максимальне - додавання неможливе!');
        }
    }
}

// В якості демонстраціїї створити:

//     декілька екземплярів класу Людина;
const human1 = new Human("Кирило", "чоловік");
const human2 = new Human("Владлена", "жінка");

//     декілька екземплярів класу Квартира;
const apartament1 = new Apartament ();
const apartament2 = new Apartament ();

//     додадити екземпляри класу Людина до екземплярів класу Квартира;
apartament1.addResident(human1);
apartament2.addResident(human2);

//     екземпляр класу Будинок;
const house1 = new House(2);

//     додадити екземпляри класу Квартира до екземплярів класу Будинок.
house1.addFlat(apartament1);
house1.addFlat(apartament2);