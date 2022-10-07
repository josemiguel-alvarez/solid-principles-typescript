/** This a good example of the open/closed principle that has been used in the following post
 * https://www.jmalvarez.dev/posts/open-closed-principle
 */

class Order {
  id: number;
  items: string[];
  shipping: Shipping;

  constructor(id: number, items: string[], shipping: Shipping) {
    this.id = id;
    this.items = items;
    this.shipping = shipping;
  }

  getTotalCost(): number {
    return this.items.length * 30;
  }
}

interface Shipping {
  getShippingCosts(totalCost: number): number;
}

class Ground implements Shipping {
  getShippingCosts(totalCost: number): number {
    return totalCost > 50 ? 0 : 5.95;
  }
}

class Air implements Shipping {
  getShippingCosts(): number {
    return 10.95;
  }
}

class PickUpInStore implements Shipping {
  getShippingCosts(): number {
    return 0;
  }
}
