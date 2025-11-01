import { log } from "./utils/logger";

const server = Bun.serve({
  port: 3000,
  routes: {
    "/": () => {
      // log user request - method, path, status code, response time
      log("User request received: GET /");
      return new Response("Bun!");
    },
  },
});

console.log(`Listening on ${server.url}`);
