const request = require("supertest");
const app = require("../src/index");

describe("Index Route Tests", () => {

  test("GET / should return message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Node Automation Demo Running");
  });

})
