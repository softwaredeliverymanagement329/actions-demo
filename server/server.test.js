const request = require("supertest");
const app = require("./server");

test("getStore returns the desired store", (done) => {
  request(app)
    .get("/store/provo")
    .expect(200)
    .expect({ name: "provo" })
    .end((err) => (err ? done(err) : done()));
});


test("putStore update a store without new information", (done) => {
  request(app)
    .put("/store/orem")
    .expect(200)
    .expect(updated: true)
    .end((err) => (err ? done(err) : done()));
});
