/** This a good example of the interface segregation principle that has been used in the following post
 * https://www.jmalvarez.dev/posts/interface-segregation-principle
 */

interface AnimalCanWalk {
  walk(): void;
}

interface AnimalCanFly {
  fly(): void;
}

class Dog implements AnimalCanWalk {
  walk() {
    console.log("Walking");
  }
}

class Duck implements AnimalCanWalk, AnimalCanFly {
  walk() {
    console.log("Walking");
  }

  fly() {
    console.log("Flying");
  }
}
