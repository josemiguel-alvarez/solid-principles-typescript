/** This a good example of the liskov substitution principle that has been used in the following post
 * https://www.jmalvarez.dev/posts/liskov-substitution-principle
 */

class Order {
  id: number;
  items: string[];

  constructor(id: number, items: string[]) {
    this.id = id;
    this.items = items;
  }
}

class ConfirmedOrder extends Order {
  payed: boolean;

  constructor(id: number, items: string[]) {
    super(id, items);
    this.payed = false;
  }

  markAsPaid(): void {
    this.payed = true;
  }
}
