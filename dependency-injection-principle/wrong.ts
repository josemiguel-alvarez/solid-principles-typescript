/** This a wrong example of the dependency injection principle that has been used in the following post
 * https://www.jmalvarez.dev/posts/dependency-inversion-principle-typescript
 */

class Order {
  id: number;
  items: string[];

  constructor(id: number, items: string[]) {
    this.id = id;
    this.items = items;
  }
}

class OrderService {
  database: MySQLDatabase;

  constructor(database: MySQLDatabase) {
    this.database = database;
  }

  save(order: Order): void {
    if (order.id === undefined) {
      this.database.insert(order);
    } else {
      this.database.update(order);
    }
  }
}

class MySQLDatabase {
  insert(order: Order) {
    console.log("inserting order");
  }

  update(order: Order) {
    console.log("updating order");
  }
}
