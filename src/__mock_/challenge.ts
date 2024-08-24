import { Factory, Model, createServer } from "miragejs";
import { faker } from "@faker-js/faker";

export default createServer({
  models: {
    challenge: Model,
  },
  seeds(server) {
    server.createList("challenge", 3);
  },
  factories: {
    challenge: Factory.extend({
      name() {
        return faker.person.firstName();
      },
      id() {
        return faker.database.mongodbObjectId();
      },
      group() {
        return Array.from(
          { length: faker.number.int({ min: 1, max: 3 }) },
          () => {
            return {
                id: faker.database.mongodbObjectId(),
                operator: faker.datatype.boolean(),
            };
          },
        );
      },
    }),
  },
  routes() {
    this.get("/api/Challenges", (schema) => schema.all("challenge"));
  },
});
