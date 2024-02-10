const request = require("supertest");
const app = require("./server");

test("getStore returns the desired store", (done) => {
  request(app)
    .get("/store/provo")
    .expect(200)
    .expect({ name: "provo" })
    .end((err) => (err ? done(err) : done()));
});
