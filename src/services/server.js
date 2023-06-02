import { Model, createServer } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,
    models: {
      education: Model,
      skill: Model,
    },
    seeds(server) {
      server.create("education", {
        date: 2022,
        title: "Title 0",
        text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
      });
      server.create("education", {
        date: 2018,
        title: "Title 1",
        text: "Et irure culpa ad proident labore excepteur elit dolore. Quis commodo elit culpa eiusmod dolor proident non commodo excepteur aute duis duis eu fugiat. Eu duis occaecat nulla eiusmod non esse cillum est aute elit amet cillum commodo.\r\n",
      });
      server.create("education", {
        date: 2020,
        title: "Title 0",
        text: "Elit voluptate ad nostrud laboris. Elit incididunt mollit enim enim id id laboris dolore et et mollit. Mollit adipisicing ullamco exercitation ullamco proident aute enim nisi. Dolore eu fugiat consectetur nulla sunt Lorem ex ad. Anim eiusmod do tempor fugiat minim do aliqua amet ex dolore velit.\r\n",
      });
    },
    routes() {
      this.namespace = "api";
      this.get(
        "/educations",
        (schema) => {
          return schema.educations.all();
        },
        { timing: 4000 }
      );

      this.get("/skills", (schema) => {
        return schema.skills.all();
      });

      this.post("/skills", (schema, request) => {
        let skillData = JSON.parse(request.requestBody);
        let skill = schema.skills.create(skillData);
        return skill;
      });
    },
  });

  return server;
}
