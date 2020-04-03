function Cat() {
  this.name = 'Markov';
  this.age = 3;
}

function Dog() {
  this.name = 'Noodles';
  this.age = 4;
}

Dog.prototype.chase = function (cat) {
  console.log(`My name is ${this.name} and I'm chasing ${cat.name}! Woof!`)
};

Dog.prototype.chase2 = function (cat, dog) {
  if (this.age < 20) {
    console.log(`My name is ${this.name} and I'm chasing ${cat.name} & ${dog.name}! Woof!`)
  } else {
    console.log(`My name is ${this.name} and I'm ${this.age} years old, and I can't catch up with ${cat.name} & ${dog.name}! Woof...`)
  }

};

const Markov = new Cat();
const Noodles = new Dog();

// Noodles.chase(Markov);

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const Wayne = new Person('Wayne', 28);
const Dorian = new Person('Dorian', 19);

Noodles.chase2.call(Wayne, Noodles, Markov) // `My name is ${this.name} and I'm Wayne years old, and I can't catch up with Noodles & Markov! Woof...`
Noodles.chase2.apply(Wayne, [Noodles, Markov, Dorian])
Noodles.chase2.apply(Dorian, [Noodles, Markov])
Noodles.chase2.apply(Dorian, [Noodles, Markov])
