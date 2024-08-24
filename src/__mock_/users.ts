import { Factory, Model, createServer } from "miragejs";
import { faker } from "@faker-js/faker";

export default createServer({
  models: {
    user: Model,
  },
  seeds(server) {
    server.createList("user", 30);
  },
  factories: {
    user: Factory.extend({
      id() {
        return faker.database.mongodbObjectId();
      },
      name() {
        return faker.person.firstName();
      },
    }),
  },
  routes() {
    this.get("/api/Users", (schema) => schema.all("user"));

    this.post("/api/Users", (schema, request) => {
      const attrs = JSON.parse(request.requestBody);
      return schema.create("user", attrs);
    });
  },
});
