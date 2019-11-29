import server from "../src/server/index";
import transactions from "../src/models/transactions.json";
import request from "supertest";

describe("Test transactions endpoint", () => {
  it("GET Should return a JSON array identical to the JSON array model", async () => {
    const url: string = "/transactions";
    const httpRequest = await request(server).get(url);
    expect(httpRequest.body).toEqual(transactions);
    expect(httpRequest.status).toEqual(200);
  });
  it("POST Should fail if one field is missing from the input", async () => {
    const url: string = "/transactions";
    const body = {
      id: 1,
      amount: 10000,
      user: "Robert",
      date: "29/11/2019",
      toAccount: 32112389,
    };
    const httpRequest = await request(server)
      .post(url)
      .send(body);
    expect(httpRequest.status).toEqual(400);
    expect(httpRequest.body).toEqual({
      message: "No currency field or currency was null",
    });
  });
});
