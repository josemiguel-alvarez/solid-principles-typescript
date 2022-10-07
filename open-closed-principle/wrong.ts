/** This a wrong example of the open/closed principle that has been used in the following post
 * https://www.jmalvarez.dev/posts/open-closed-principle
 */

class Order {
  id: number;
  items: string[];
  shipping: string;

  constructor(id: number, items: string[], shipping: string) {
    this.id = id;
    this.items = items;
    this.shipping = shipping;
  }

  getTotalCost(): number {
    return this.items.length * 30;
  }

  getShippingCosts(): number {
    const totalCost = this.getTotalCost();

    if (this.shipping === "ground") {
      return totalCost > 50 ? 0 : 5.95;
    }

    if (this.shipping === "air") {
      return 10.95;
    }

    return 0;
  }
}
