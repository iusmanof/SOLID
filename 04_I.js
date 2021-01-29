// Interface segregation principle

// Создавайте узкоспециализированные интерфейсы,
// предназначенные для конкретного клиента.
// Клиенты не должны зависеть от интерфейсов, которые они не используют.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log(`${this.name} can walk`);
//   }

//   swim() {
//     console.log(`${this.name} can swim`);
//   }

//   fly() {
//     console.log(`${this.name} can fly`);
//   }
// }

// class Dog extends Animal {
//   fly() {
//     return null;
//   }
// }

// class Eagle extends Animal {/*...*/}

// class Bird extends Animal {/*...*/}

// const dog = new Dog("bob");
// dog.walk();
// dog.swim();
// dog.fly(); // could be error

class Animal {
  constructor(name) {
    this.name = name;
  }
}

const walker = {
  walk() {
    console.log(`${this.name} can walk`);
  },
};

const swimmer = {
  swim() {
    console.log(`${this.name} can swim`);
  },
};

const flier = {
  fly() {
    console.log(`${this.name} can fly`);
  },
};

class Dog extends Animal {}
class Eagle extends Animal {}
class Bird extends Animal {}

Object.assign(Dog.prototype, swimmer, walker);
Object.assign(Eagle.prototype, flier, walker);

const dag = new Dog("bab");
dag.walk();
dag.swim();
dag.fly(); // TypeError: dag.fly is not a functionor