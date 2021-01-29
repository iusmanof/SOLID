// Liskov subtitution principle

// Необходимо, чтобы подклассы могли бы служить заменой для своих суперклассов.

//    A                A
//   / \              / \
//  B   C    |=>     A'  A"
//                  /     \
//                 B       C

class Company {}
class Developer extends Company {
  work() {
    return "write code";
  }
}
class HR extends Company {
  work() {
    return "find developers";
  }
}

// class ReactDeveloper extends Company{}
class ReactDeveloper extends Developer {}
class LaravelDeveloper extends Developer {}

// class Recrutier extends Company() {}
class Recrutier extends HR {}

function startWorking(who) {
  who.work();
}

console.log(startWorking(new Recrutier()));
console.log(startWorking(new ReactDeveloper()));
console.log(startWorking(new LaravelDeveloper()));
