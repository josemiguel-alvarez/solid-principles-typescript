/** This a good example of the dependency injection principle that has been used in the following post
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
  database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  save(order: Order): void {
    this.database.save(order);
  }
}

interface Database {
  save(order: Order): void;
}

class MySQLDatabase implements Database {
  save(order: Order) {
    // production database
  }
}

class PostgreSQL implements Database {
  save(order: Order) {
    // development database
  }
}
