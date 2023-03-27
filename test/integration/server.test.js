const request = require("supertest");
const server = require("./../../src/server");
const expect = require("chai").expect;

describe("server", () => {
    it("should respond to GET / with 200 OK for default route", async () => {
        await request(server)
            .get("/")
            .expect(200)
            .expect("Content-Type", "text/html");
    });

    it("should respond to POST /rent with 200 OK", async () => {
        await request(server)
            .post("/rent")
            .send({
                customer: {
                    age: 39,
                },
                carCategory: {
                    id: "0ef9851a-a9e8-437b-b748-3f6884fe17ae",
                    name: "Sedan",
                    carIds: [
                        "d946aef3-7532-4e7b-a843-d0ff5c48fd30",
                        "ccb708ae-300c-48ca-85c7-17bdcf9f7cae",
                    ],
                    price: 98.29,
                },
                numberOfDays: 5,
            })
            .expect(200)
            .expect("Content-Type", "application/json");
    });
    it("should respond to POST /rent with 400 if validation fails", async () => {
        const expected = {
            result: 'alguma prop esta faltando'
        }
        const result = await request(server)
            .post("/rent")
            .send({
                carCategory: {
                    id: "0ef9851a-a9e8-437b-b748-3f6884fe17ae",
                    name: "Sedan",
                    carIds: [
                        "d946aef3-7532-4e7b-a843-d0ff5c48fd30",
                        "ccb708ae-300c-48ca-85c7-17bdcf9f7cae",
                    ],
                    price: 98.29,
                },
                numberOfDays: 5,
            })
            .expect(400)
            .expect("Content-Type", "application/json")
            
        expect(result.body).to.deep.equal(expected);
           
    });
});
