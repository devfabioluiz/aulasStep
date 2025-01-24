"use strict";
var Animal;
(function (Animal) {
    class Dog {
        bark() {
            console.log("Bark");
        }
    }
    Animal.Dog = Dog;
    class Cat {
        meow() {
            console.log("Meow");
        }
    }
    Animal.Cat = Cat;
})(Animal || (Animal = {}));
const dog = new Animal.Dog();
dog.bark(); // Bark
const cat = new Animal.Cat();
cat.meow(); // Meow
