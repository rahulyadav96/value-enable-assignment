// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../server/index");


    //test for getting all users
  describe("GET /users ", () => {
    test("It should respond with status code 200", async () => {
      const response = await request(app).get("/users");
      expect(response.statusCode).toBe(200);
    });
  });

  //test for signin
  describe("POST /signup ", () => {
    test("It should respond with status code 201", async () => {
      const response = await request(app).post("/signup");
      expect(response.statusCode).toBe(201);
    });
  });

  //test for login
  describe("POST /login ", () => {
    test("It should respond with status code 200", async () => {
      const response = await request(app).post("/login");
      expect(response.statusCode).toBe(200);
    });
  });
