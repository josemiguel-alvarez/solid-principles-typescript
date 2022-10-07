/** This a wrong example of the liskov substitution principle that has been used in the following post
 * https://www.jmalvarez.dev/posts/liskov-substitution-principle
 */

class Order {
  id: number;
  items: string[];
  payed: boolean;

  constructor(id: number, items: string[]) {
    this.id = id;
    this.items = items;
    this.payed = false;
  }

  markAsPaid(): void {
    this.payed = true;
  }
}

class DraftOrder extends Order {
  markAsPaid(): void {
    throw new Error("Draft orders can't be payed");
  }
}
