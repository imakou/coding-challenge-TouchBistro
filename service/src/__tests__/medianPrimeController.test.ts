import request from "supertest";
import { app } from "../app";

describe("GET /median-prime", () => {
  afterAll((done) => {
    done();
  });
  it("should return the correct median prime", async () => {
    const testData = {
      upperLimit: 10,
      result: [2, 3, 5, 7],
    };
    const res = await request(app).get(`/median-prime?upperLimit=${testData.upperLimit}`);
    expect(res.status).toEqual(200);
    expect(res.body.data).toEqual(testData.result);
  });
  it("should return an error message IF pass a non-number query", async () => {
    const testData = {
      upperLimit: "hello",
      result: "The upperLimit parameter must be a number",
    };
    const res = await request(app).get(`/median-prime?upperLimit=${testData.upperLimit}`);
    expect(res.status).toEqual(400);
    expect(res.text).toEqual(testData.result);
  });
});
