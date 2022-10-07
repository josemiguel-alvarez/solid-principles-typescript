/** This a wrong example of the interface segregation principle that has been used in the following post
 * https://www.jmalvarez.dev/posts/interface-segregation-principle
 */

interface Animal {
  walk(): void;
  fly(): void;
}

class Dog implements Animal {
  walk() {
    console.log("Walking");
  }

  fly() {
    throw new Error("Dogs cannot fly");
  }
}

class Bird implements Animal {
  walk() {
    console.log("Walking");
  }

  fly() {
    console.log("Flying");
  }
}
