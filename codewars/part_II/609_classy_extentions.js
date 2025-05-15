class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        return `${this.name} make a noise.`;
    }
}

class Cat extends Animal {
    speak() {
        return `${this.name} meows.`;
    }
}

const kitty = new Cat("Luna");
console.log(kitty.speak()); //Luna meows.
