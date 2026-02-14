const request = require("supertest");
const app = require("../src/index");

describe("App Test", () => {
    test("GET / should return message", async () => {
        const res = await request(app);
        expect(res.body.message).toBe("Node Automation Demo Running");
    });
});

