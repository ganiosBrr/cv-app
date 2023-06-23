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
        title: "EPAM UpSkill, LLC",
        text: "Frontend Development Training Program.\r\n",
      });
      server.create("education", {
        date: 2018,
        title: "OpenIT Camp",
        text: "Practical course for beginner developers.\r\n",
      });
      server.create("education", {
        date: 2014,
        title: "International Information Technology University",
        text: "Bachelor degree of Computer Science and Software Engineering.\r\n",
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
